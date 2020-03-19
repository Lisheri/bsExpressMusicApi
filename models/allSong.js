const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const allSongSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    id: {
        type: Number,
        require: true,
        unique: true
    },
    pst: {
        type: Number,
        require: false
    },
    t: {
        type: Number,
        require: false
    },
    ar: {
        type: Array,
        require: false
    },
    alia: {
        type: Array,
        require: false
    },
    pop: {
        type: Number,
        require: false
    },
    st: {
        type: Number,
        require: false
    },
    rt: {
        type: String,
        require: false
    },
    fee: {
        type: Number,
        require: false
    },
    v: {
        type: Number,
        require: false
    },
    crbt: {
        type: String,
        require: false
    },
    cf: {
        type: String,
        require: false
    },
    al: {
        type: Object,
        require: true
    },
    dt: {
        type: Number,
        require: false
    },
    h: {
        type: Object,
        require: false
    },
    m: {
        type: Object,
        require: false
    },
    l: {
        type: Object,
        require: false
    },
    a: {
        type: String,
        require: false
    },
    cd: {
        type: String,
        require: false
    },
    no: {
        type: Number,
        require: false
    },
    rtUrl: {
        type: String,
        require: false
    },
    ftype: {
        type: Number,
        require: false
    },
    rtUrls: {
        type: Array,
        require: false
    },
    djId: {
        type: Number,
        require: false
    },
    copyright: {
        type: Number,
        require: false
    },
    s_id: {
        type: Number,
        require: false
    },
    mark: {
        type: Number,
        require: false
    },
    originCoverType: {
        type: Number,
        require: false
    },
    mv: {
        type: Number,
        require: false
    },
    rtype: {
        type: Number,
        require: false
    },
    rurl: {
        type: String,
        require: false
    },
    mst: {
        type: Number,
        require: false
    },
    cp: {
        type: Number,
        require: false
    },
    publishTime: {
        type: Number,
        require: false
    }
}, {
    collection: "allSongs"
});

module.exports = mongoose.model("AllSong", allSongSchema);