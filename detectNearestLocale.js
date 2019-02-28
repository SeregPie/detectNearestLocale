let String_isString = function(value) {
	return typeof value === 'string';
};

let normalizeLocale = function(locale) {
	return locale.toLowerCase().split('-');
};

let equalizeLocale = function(locale, otherLocale) {
	let i = 0;
	for (let ii = Math.min(locale.length, otherLocale.length); (i < ii) && (locale[i] === otherLocale[i]); i++);
	return locale.length + otherLocale.length - 2 * i;
};

module.exports = function(supportedLocales, preferredLocales) {
	supportedLocales = Array.from(supportedLocales).filter(String_isString);
	if (supportedLocales.length) {
		let normalizedSupportedLocales = supportedLocales.map(normalizeLocale);
		let nearestEquality = Infinity;
		let nearestSupportedLocaleIndex = 0;
		Array.from(preferredLocales).some(preferredLocale => {
			if (String_isString(preferredLocale)) {
				preferredLocale = normalizeLocale(preferredLocale);
				return normalizedSupportedLocales.some((supportedLocale, supportedLocaleIndex) => {
					let equality = equalizeLocale(supportedLocale, preferredLocale);
					if (equality < nearestEquality) {
						nearestEquality = equality;
						nearestSupportedLocaleIndex = supportedLocaleIndex;
					}
					return nearestEquality === 0;
				});
			}
		});
		return supportedLocales[nearestSupportedLocaleIndex];
	}
}
