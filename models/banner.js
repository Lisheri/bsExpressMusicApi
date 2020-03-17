const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const bannerShcmea = new Schema({
    imageUrl: {
        type: "String",
        require: true
    },
    targetId: {
        type: Number,
        require: true
    },
    adid: {
        type: Number,
        require: false
    },
    targetType: {
      type: Number,
      require: true
    },
    titleColor: {
        type: String,
        require: true
    },
    typeTitle: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: false
    },
    exclusive: {
        type: Boolean,
        require: true
    },
    monitorImpress: {
        type: String,
        require: false
    },
    monitorClick: {
        type: String,
        require: false
    },
    monitorType: {
        type: Number,
        require: false
    },
    monitorImpressList: {
        type: Array,
        require: false
    },
    monitorClickList: {
        type: Array,
        require: false
    },
    monitorBlackList: {
        type: Array,
        require: false
    },
    extMonitor: {
        type: String,
        require: false
    },
    extMonitorInfo: {
        type: Array,
        require: false
    },
    adSource: {
        type: String,
        require: false
    },
    adLocation: {
        type: String,
        require: false
    },
    adDispatchJson: {
        type: Object,
        require: false
    },
    encodeId: {
        type: String,
        require: true
    },
    program: {
        type: String,
        require: false
    },
    event: {
        type: String,
        require: false
    },
    video: {
        type: String,
        require: false
    },
    song: {
        type: String,
        require: false
    },
    scm: {
        type: String,
        require: true
    },
}, {
    collection: "banners"
});

module.exports = mongoose.model('Banner', bannerShcmea);