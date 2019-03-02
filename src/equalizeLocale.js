export default function(supportedLocale, preferredLocale) {
	let i = 0;
	for (let ii = Math.min(supportedLocale.length, preferredLocale.length); (i < ii) && (supportedLocale[i] === preferredLocale[i]); i++);
	return supportedLocale.length + preferredLocale.length - 2 * i;
}
