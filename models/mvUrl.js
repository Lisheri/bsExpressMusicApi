const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const mvUrlSchema = new Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    url: {
        type: String,
        require: true
    },
    r: {
        type: Number,
        require: false
    },
    size: {
        type: Number,
        require: false
    },
    md5: {
        type: String,
        require: false
    },
    code: {
        type: Number,
        require: true
    },
    expi: {
        type: Number,
        require: true
    },
    fee: {
        type: Number,
        require: true
    },
    mvFee: {
        type: Number,
        require: true
    },
    st: {
        type: Number,
        require: true
    },
    msg: {
        type: String,
        require: true
    }
}, {
    collection: "mvUrls"
});

module.exports = mongoose.model("MvUrl", mvUrlSchema);