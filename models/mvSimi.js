const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const mvSimiSchema = new Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    mvs: {
        type: Array,
        require: true,
    },
    code: {
        type: Number,
        require: true
    }
}, {
    collection: "mvSimis"
});

module.exports = mongoose.model("MvSimi", mvSimiSchema);