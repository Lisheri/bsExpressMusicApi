const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const searchHotSchema = new Schema({
   hots: {
       type: Array,
       require: true,
       first: {
           type: String,
           require: true
       },
       second: {
           type: Number,
           require: true
       },
       third: {
           type: String,
           require: false
       },
       iconType: {
           type: Number,
           require: true
       }
   }
}, {
    collection: "searchHots"
});

module.exports = mongoose.model('SearchHot', searchHotSchema);