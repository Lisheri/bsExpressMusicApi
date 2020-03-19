const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const allPrivilegeSchema = new Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    fee: {
        type: Number,
        require: false
    },
    payed: {
        type: Number,
        require: false
    },
    st: {
        type: Number,
        require: false
    },
    pl: {
        type: Number,
        require: false
    },
    dl: {
        type: Number,
        require: false
    },
    sp: {
        type: Number,
        require: false
    },
    cp: {
        type: Number,
        require: false
    },
    subp: {
        type: Number,
        require: false
    },
    cs: {
        type: Boolean,
        require: false
    },
    maxbr: {
        type: Number,
        require: false
    },
    fl: {
        type: Number,
        require: false
    },
    toast: {
        type: Boolean,
        require: false
    },
    flag: {
        type: Number,
        require: false
    },
    preSell: {
        type: Boolean,
        require: false
    },
    playMaxbr: {
        type: Number,
        require: false
    },
    downloadMaxbr: {
        type: Number,
        require: false
    },
}, {
    collection: "allPrivileges"
});

module.exports = mongoose.model("AllPrivileges", allPrivilegeSchema);