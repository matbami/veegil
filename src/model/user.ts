import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { Document, Schema, Model, model } from 'mongoose';


export interface IUser extends mongoose.Document {
    name: string
    email: string,
    password: string,
    findByCredentials(email: string, password: string): string



}


export interface IChange extends Model<IUser> {
    findByCredentials(email: string, password: string): string;
    generateAuthToken(): string
}

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }


})

UserSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user.id.toString() }, `${process.env.JWT_TOKEN}`)
    // user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

UserSchema.statics.findByCredentials = async (email: string, password: string) => {

    const user = await User.findOne({ email })

    if (!user) {
        return new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }
    return user
}
//middleware
//run some code before a user is saved and hash



UserSchema.pre<IUser>('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)

    }

    next()

})

export const User: IChange = mongoose.model<IUser, IChange>('User', UserSchema)

export default User

// export interface IUser extends mongoose.Document {
//     name:{},
//     email: str
//     password: string
//   }

//   const usersSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//   });

//   usersSchema.methods.generateAuthToken = async function(){
//     const user = this
//     const token = jwt.sign({_id:user.id.toString()},'thisismyproject')
//     // user.tokens = user.tokens.concat({token})
//     await user.save()
//     return token
// }

// usersSchema.statics.findByCredentials = async(email: string,password:string)=>{

//     const user = await User.findOne({email})

//     if(!user){
//         throw new Error('Unable to login')
//     }

//     const isMatch = await bcrypt.compare(password,user.password)

//     if(!isMatch){
//         throw new Error('Unable to login')
//     }
//     return user
// }
// //middleware
// //run some code before a user is saved and hash

//   usersSchema.pre<IUser>("save", async function(next) {
//     const user = this;

//     if(user.isModified('password')){
//     user.password = await bcrypt.hash(user.password,8) 

//    }
//     user.password
//     // user.password and user.username exists here.
//     next();
//   });

//   const User = mongoose.model<IUser>("Users", usersSchema);