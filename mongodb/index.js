const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://Rohit:123456$rohit@cluster0.v9eavnk.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect DB Successfully!');
    }
    catch (error) {
        console.log('Connect DB Fail');
    }
};

module.exports = { connect };