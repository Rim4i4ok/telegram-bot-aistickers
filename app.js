const TelegramBot = require("node-telegram-bot-api");

const { botToken } = require("./settings");
const { getPacks } = require("./info/packInfo");

const bot = new TelegramBot(botToken, { polling: true });

// Listen for any kind of message. There are different kinds of
// messages.
// bot.on("message", msg => {
// 	const chatId = msg.chat.id;

// 	console.log(msg);
// 	// send a message to the chat acknowledging receipt of their message
// 	bot.sendSticker(chatId, hello);
// });

bot.onText(/\/add (.+)/, (msg, match) => {
	const url = match[1];
	const chatId = msg.chat.id;

	const packs = getPacks();
	const isExist = packs.includes(url);
	bot.sendMessage(chatId, isExist ? "Already exist" : "New pack!");
});
