import mongoose from 'mongoose'

import { Request, Response } from 'express'
import Product from '../model/product'



export const addProduct = async (req: Request, res: Response) => {
    try {

        const product = new Product(req.body)
        await product.save()
        res.status(201).send(product)
    } catch (error) {
        res.send(error)
    }
}

export const viewAllProduct = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({})
        res.status(200).send(products)
    } catch (error) {
        res.send(error)
    }

}

export const viewOneProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id)
        if (!product) {
            res.status(404).json("No such product")
        }
        else {
            res.status(200).send(product)
        }

    } catch (error) {
        res.send(error)
    }
}


export const deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const product = await Product.findByIdAndDelete(id)

        res.status(200).send("successfully deleted")
    } catch (error) {
        res.send(error)
    }
}


// export const updateProduct = async (req: Request, res: Response) => {
//     const id = req.params.id
//     try {
//         const product = Product.findById(req.body)
//         await product.save()
//         res.status(200).send("successfully deleted")
//     } catch (error) {
//         res.send(error)
//     }
// }

