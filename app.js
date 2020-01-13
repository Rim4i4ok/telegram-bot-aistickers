const TelegramBot = require("node-telegram-bot-api");

const { botToken } = require("./settings");
const { hello } = require("./constants/stickers");

const bot = new TelegramBot(botToken, { polling: true });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", msg => {
	const chatId = msg.chat.id;

	console.log(msg);
	// send a message to the chat acknowledging receipt of their message
	bot.sendSticker(chatId, hello);
});
