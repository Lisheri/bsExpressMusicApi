const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const mvDetailSchema = new Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    loadingPic: {
        type: String,
        require: false
    },
    bufferPic: {
        type: String,
        require: false
    },
    loadingPicFS: {
        type: String,
        require: false
    },
    bufferPicFS: {
        type: String,
        require: false
    },
    subed: {
        type: Boolean,
        require: false
    },
    data: {
        type: Object,
        require: true
    },
    code: {
        type: Number,
        require: true
    }
}, {
    collection: "mvDetails"
});

module.exports = mongoose.model("MvDetail", mvDetailSchema);