'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	stock: {
		type: Number,
		default: 1
	},
	description: String
});

export default mongoose.model('Product', ProductSchema);
