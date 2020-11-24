import mongoose from 'mongoose'

import { Request, Response } from 'express'
import Product from '../model/product'
import User from '../model/user'



export const userSignup = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body)
        // const check = await User.findByCredentials(req.body.email, req.body.password)
        // if (check) {
        //     res.json({
        //         data: {
        //             message: "Email taken"
        //         }
        //     })
        // }
        const token = await (<any>user).generateAuthToken()
        await user.save()
        res.status(200).json({
            status: 'success',
            data: {
                message: "Registration successful",
                user, token
            }
        })
    } catch (error) {
        res.send(error)
    }
}

export const userLogin = async (req: Request, res: Response) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await (<any>user).generateAuthToken()
        if (!user) {
            res.status(404).send('Cannot Login')
        }
        res.status(201).json({
            status: 'success',
            data: {
                message: "Login successful",
                user, token
            }
        })


    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }

}



