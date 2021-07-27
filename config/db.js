const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(
        'mongodb+srv://news123:news123@newssubs.c1wov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
