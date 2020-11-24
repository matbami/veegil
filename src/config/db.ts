import mongoose from 'mongoose';

import dotenv from 'dotenv'

const connectDB = async () => {
    const url = (<any>process).env.MONGO_URI


    try {
        const conn = await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true
        });

        console.log(`MongoDB connected : ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
};

export default connectDB;