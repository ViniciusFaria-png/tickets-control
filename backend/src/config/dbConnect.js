import mongoose from "mongoose";

async function connectInDataBase(){
    mongoose.connect(process.env.MONGO_URI)

    return mongoose.connection;
}

export default connectInDataBase;


