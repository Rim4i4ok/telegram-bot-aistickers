const config = require("config");

const botToken = config.get("botToken");
const mongoUri = config.get("mongoUri");

module.exports = { botToken, mongoUri };
