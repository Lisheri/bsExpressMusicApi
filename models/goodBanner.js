const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const goodBannerSchema = mongoose.Schema({
	id: {
		type: Number,
		require: true,
		unique: true
	},
	type: {
		type: Number,
		require: true
	},
	imgUrl: {
		type: String,
		require: true
	}
}, {
	collection: "shopBanners"
});

module.exports = mongoose.model("GoodBanner", goodBannerSchema);