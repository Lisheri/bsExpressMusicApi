const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expressMusicApi', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const newMvSchema = new Schema({
	count: {
		type: Number,
		require: true
	},
	hasMore: {
		type: Boolean,
		require: true
	},
	data: {
		type: Array,
		require: true
	},
	area: {
		type: String,
		require: true
	},
	order:{
		type: String,
		require: true
	},
	type: {
		type: String,
		require: true
	},
	code: {
		type: Number,
		require: true
	}
},{collection: "newMvs"});

module.exports = mongoose.model("NewMv", newMvSchema);