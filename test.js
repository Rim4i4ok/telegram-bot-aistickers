const examples = [
	"https://t.me/addstickers/NinNinKunoichi",
	"https://t.me/addstickers/YandereOjounyan",
	"https://t.me/addstickers/LINE_Grimgar_Ashes_Illusions",
	"https://t.me/addstickers/hucathiastickers",
	"https://t.me/addstickers/asdf_stickers",
	"https://t.me/addstickers/testwanwanwan",
	"https://t.me/addstickers/himecr",
	"https://t.me/addstickers/RabbitEarGirlRosy",
	"https://t.me/addstickers/bnhaathiastickers",
	"https://t.me/addstickers/LINE_Shiro_White_Neko_ENG",
];

const testLinks = [
	"https://telegram.me/addstickers/",
	"https://t.me/addstickers/himecr",
	"https://telegram.me/addstickers/BellezzaFelutiainschooluniform",
];

const linkFormats = [
	"(?<=https://telegram.me/addstickers/).+", // https://regex101.com/r/VDhvWO/1
	"(?<=https://t.me/addstickers/).+", // https://regex101.com/r/VDhvWO/2
];

/**
 * Check if link has telegram link format
 * @param {string} link
 */
function isUrl(link) {
	for (let i = 0; i < linkFormats.length; i++) {
		let result = link.match(linkFormats[i]);
		if (result === null) {
			continue;
		} else {
			return true;
		}
	}

	return false;
}

/**
 * Get pack base info
 * @param {string} link
 */
function getPackInfo(link) {
	for (let i = 0; i < linkFormats.length; i++) {
		let result = link.match(linkFormats[i]);
		if (result === null) {
			continue;
		}

		return {
			isValid: true,
			name: result[0],
			link: link,
		};
	}

	return {
		isValid: false,
		name: "",
		link: link,
	};
}

testLinks.forEach(link => {
	console.log(isUrl(link));
	console.log(getPackInfo(link));
});
