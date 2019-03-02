import String_isString from './utils/String/isString';

import equalizeLocale from './equalizeLocale';
import transformLocale from './transformLocale';

export default function(supportedLocales, preferredLocales) {
	supportedLocales = Array.from(supportedLocales).filter(String_isString);
	if (supportedLocales.length) {
		let transformedSupportedLocales = supportedLocales.map(transformLocale);
		let nearestEquality = Infinity;
		let nearestSupportedLocaleIndex = 0;
		Array.from(preferredLocales).some(preferredLocale => {
			if (String_isString(preferredLocale)) {
				preferredLocale = transformLocale(preferredLocale);
				return transformedSupportedLocales.some((supportedLocale, supportedLocaleIndex) => {
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
