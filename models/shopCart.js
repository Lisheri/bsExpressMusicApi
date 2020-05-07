const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const shopCartSchema = new Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    checked: {
        type: Boolean,
        require: true
    },
    goodsNum: {
        type: Number,
        require: true
    },
    imgUrl: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    singlePrice: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    type: {
        type: String,
        require: true
    }
}, {
    collection: 'shopCarts'
});

module.exports = mongoose.model("ShopCart", shopCartSchema);