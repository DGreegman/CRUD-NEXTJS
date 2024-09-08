import mongoose from "mongoose";


const connectDB = async () =>{
    const connectString = process.env.MONGO_URI
    mongoose.connect(connectString)
        .then(() => console.log('Conection Successful...'))
        .catch(error => console.log(error))
}

export default connectDB