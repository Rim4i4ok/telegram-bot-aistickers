const TelegramBot = require("node-telegram-bot-api");

const { botToken } = require("./settings");

const bot = new TelegramBot(botToken, { polling: true });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", msg => {
	const chatId = msg.chat.id;

	// send a message to the chat acknowledging receipt of their message
	bot.sendMessage(chatId, "Received your message. Thanks!");
});
