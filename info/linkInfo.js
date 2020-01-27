const { linkFormats } = require("../constants/linkFormat");

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
function getLinkInfo(link) {
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

module.exports = { isUrl, getLinkInfo };
