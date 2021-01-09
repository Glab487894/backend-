const mongoose = require('mongoose');

const userSchemaDB = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
});

mongoose.model('Users', userSchemaDB);

module.exports = mongoose.model('Users');