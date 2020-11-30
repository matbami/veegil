import express from "express"

import connectDB from './config/db'
import * as product from './controllers/product'
import * as user from './controllers/user'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { auth, aba } from './middleware/Auth'
import cors from 'cors'

dotenv.config();

connectDB()

const app = express();
app.set("port", (<any>process).env.PORT || 3000)

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req: any, res: any) => {
    res.send('Helloworld')
})

// app.put('/product/:id', <any>aba, product.)
app.delete('/product/:id', <any>aba, product.deleteProduct)
app.get('/product/:id', <any>auth, product.viewOneProduct)
app.get('/product', <any>auth, product.viewAllProduct)
app.post('/product', <any>auth, product.addProduct)

app.post('/user', user.userSignup)
app.post('/userlog', user.userLogin)



app.listen(app.get('port'), () => {
    console.log("App is running on port 3000")
})