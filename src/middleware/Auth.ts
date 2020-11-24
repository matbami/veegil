import { NextFunction } from "express"
import jwt from "jsonwebtoken"

import User from '../model/user'
const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {


        const token = (<any>req).header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, `${process.env.JWT_TOKEN}`)
        const user = await User.findOne({ _id: (<any>decoded)._id })
        // console.log(user)

        // if (!user) {
        //     throw new Error()
        // }
        // (<any>req).token = token
        //     (<any>req).user = user
        // console.log(user)

        next()

    } catch (error) {
        (<any>res).status(401).send({ error: "please authenticate" })
    }


}

const aba = async (req: Request, res: Response, next: NextFunction) => {
    try {


        const token = (<any>req).header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, `${process.env.JWT_TOKEN}`)
        const user = await User.findOne({ _id: (<any>decoded)._id })
        const check = (<any>user).isAdmin

        if (check == false) {
            (<any>res).send("you must be logged in first")
        }
        // (<any>req).token = token
        //     (<any>req).user = user
        // console.log(user)

        next()

    } catch (error) {
        (<any>res).status(401).send({ error: "please authenticate" })
    }


}
export { auth, aba }