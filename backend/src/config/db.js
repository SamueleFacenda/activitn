import { connect } from 'mongoose';

const connectDB = async () => {
    try {
        await connect('mongodb://localhost:27017/test');
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
