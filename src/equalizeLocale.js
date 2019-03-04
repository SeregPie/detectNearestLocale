export default function(supportedLocale, preferredLocale) {
	let i = 0;
	let supportedLocaleLength = supportedLocale.length;
	let preferredLocaleLength = preferredLocale.length;
	for (let ii = Math.min(supportedLocaleLength, preferredLocaleLength); (i < ii) && (supportedLocale[i] === preferredLocale[i]); i++);
	return (i > 0) ? ((2 / (supportedLocaleLength - i + 1) + 1 / (preferredLocaleLength - i + 1)) / 3) : 0;
}
