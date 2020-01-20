const { getPacks } = require("./models/packInfo");

const testLinks = [
	"https://telegram.me/addstickers/LINE_Shiro_White_Neko_ENG",
	"https://t.me/addstickers/himecr",
	"https://telegram.me/addstickers/BellezzaFelutiainschooluniform",
];

function isNew(link) {
	const packs = getPacks();
	return !packs.includes(link);
}

testLinks.forEach(link => {
	// console.log(isUrl(link));
	console.log(isNew(link));
});
