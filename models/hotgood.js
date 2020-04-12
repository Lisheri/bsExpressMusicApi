const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const hotGoodSchema = new Schema({
	id: {
		type: Number,
		require: true,
		unique: true
	},
	imgUrl: {
		type: String,
		require: true
	},
	hasPriceTag: {
		type: Boolean,
		require: true
	},
	newPrice: {
		type: Number,
		require: false
	},
	oldPrice: {
		type: Number,
		require: false
	},
	hasGoodTag: {
		type: Boolean,
		require: true
	},
	goodTag: {
		type: String,
		require: false
	},
	goodName: {
		type: String,
		require: true
	},
	nowPrice: {
		type: Number,
		require: true
	}
}, {
	collection: "hotGoods"
});

module.exports = mongoose.model("HotGood", hotGoodSchema);