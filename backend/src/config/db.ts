import mongoose from "mongoose"

const connectToDatabase = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to mongo db');
    } catch (error) {
        console.log('Error connecting to database', error);
        process.exit(1);
    }
}

export default connectToDatabase;