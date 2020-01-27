const { Schema, model } = require("mongoose");

const schema = new Schema({
	name: { type: String, required: true },
	link: { type: String, required: true, unique: true },
});

module.exports = model("Pack", schema);
