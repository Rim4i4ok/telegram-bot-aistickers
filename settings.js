const config = require("config");

const botToken = config.get("botToken");

module.exports = { botToken };
