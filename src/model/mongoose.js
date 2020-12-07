import Mongoose from 'mongoose';

// MongoDb Options
const mongoDbOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
};

// MongoDB Connection
Mongoose.Promise = global.Promise;
Mongoose.connect(process.env.MONGODB_URI, mongoDbOptions)
    .then(() => console.log('🤩❤️ Connection: Successful!'))
    .catch((e) => console.log('🤯 Connection: Unsuccessful!', e));

export default Mongoose;
