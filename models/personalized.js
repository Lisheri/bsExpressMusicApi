const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/expressMusicApi', {
	useNewUrlParser: true
});

const Schema = mongoose.Schema;

const personalizedSchema = new Schema({
	id: {
		type: Number,
		require: true
	},
	type: {
		type: Number,
		require: true
	},
	name: {
		type: String,
		require: true
	},
	copywriter: {
		type: String,
		require: true
	},
	picUrl: {
		type: String,
		require: true
	},
	canDislike: {
		type: Boolean,
		require: true
	},
	trackNumberUpdateTime: {
		type: Number,
		require: true
	},
	playCount: {
		type: Number,
		require: true
	},
	trackCount: {
		type: Number,
		require: true
	},
	highQuality: {
		type: Boolean,
		require: true
	},
	alg: {
		type: String,
		require: true
	},
}, {
	collection: 'personalizeds'
});

module.exports = mongoose.model('Personalized', personalizedSchema);