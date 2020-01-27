const mongoose = require("mongoose");
const Pack = require("./models/Pack");
const { mongoUri } = require("./settings");
const { getPacks } = require("./info/packInfo");
const { getLinkInfo } = require("./info/linkInfo");

const testLinks = [
	"https://telegram.me/addstickers/LINE_Shiro_White_Neko_ENG",
	"https://t.me/addstickers/himecr",
	"https://telegram.me/addstickers/BellezzaFelutiainschooluniform",
];

function isNew(link) {
	const packs = getPacks();
	return !packs.includes(link);
}

//console.log(getLinkInfo(testLinks[0]));

// testLinks.forEach(link => {
// 	// console.log(isUrl(link));
// 	console.log(isNew(link));
// });

async function start() {
	try {
		console.log(mongoUri);
		await mongoose
			.connect(mongoUri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
			})
			.then(() => console.log("DB server connect"));

		var info = getLinkInfo(testLinks[0]);
		console.log(info);

		const { name } = info;

		const existing = await Pack.findOne({ name });
		if (existing) {
			console.log(`Pack, ${name} exist`);
			return process.exit(1);
		} else {
			console.log("Waaaaa, new!");
		}

		const pack = new Pack({
			name: info.name,
			link: info.link,
		});

		var a = await pack.save();
		console.log(a);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

start();
