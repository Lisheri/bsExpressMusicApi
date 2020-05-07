const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const goodsInfoSchema = new Schema({
	id: {
		type: Number,
		require: true,
		unique: true
	},
	title: {
		type: String,
		require: false
	},
	list: {
		type: Array,
		require: false
	},
	tabContents: {
		type: Array,
		require: false
	},
	colors: {
		type: Array,
		require: false
	},
	price: {
		type: Array,
		require: false
	},
	stock: {
		type: Number,
		require: false
	},
	goodDec: {
		type: String,
		require: false
	},
	details: {
		type: String,
		require: false
	}
},{
	collection: "goodsInfos"
});

module.exports = mongoose.model("GoodsInfo", goodsInfoSchema);