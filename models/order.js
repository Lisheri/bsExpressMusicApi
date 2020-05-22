const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    outTradeNo: {
        type: String,
        require: true,
        unique: true
    },
    subject: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
}, {
    collection: "orders"
});

module.exports = mongoose.model('Order', orderSchema);