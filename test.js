/*eslint no-console: 0*/

let detectNearestLocale = require('./detectNearestLocale');

console.log([
	detectNearestLocale([], ['aa', 'bb']) === undefined,
	detectNearestLocale(['aa', 'bb'], ['cc', 'bb']) === 'bb',
	detectNearestLocale(['aa', 'bb'], []) === 'aa',
	detectNearestLocale(['aa', 'bb'], ['cc', 'dd']) === 'aa',
	detectNearestLocale(['bb-aa', 'aa'], ['cc', 'bb-bb']) === 'bb-aa',
	detectNearestLocale(['aa', 'bb-aa'], ['bb-bb', 'cc']) === 'bb-aa',
	detectNearestLocale(['aa-bb', 'aa-aa-aa'], ['aa-aa']) === 'aa-aa-aa',
	detectNearestLocale(['aa-aa-aa', 'aa-bb'], ['aa-aa']) === 'aa-aa-aa',
	detectNearestLocale(['aa', 'aa-aa-aa'], ['aa-aa']) === 'aa',
	detectNearestLocale(['aa-aa-aa', 'aa'], ['aa-aa']) === 'aa',
	detectNearestLocale(['aa', 'aa-aa-aa-aa'], ['aa-aa-aa']) === 'aa',
	detectNearestLocale(['aa-aa-aa-aa', 'aa'], ['aa-aa-aa']) === 'aa',
	detectNearestLocale(['aa', 'aa-aa'], ['aa-bb']) === 'aa',
	detectNearestLocale(['aa-aa', 'aa'], ['aa-bb']) === 'aa',
	detectNearestLocale(['aa', 'aa-aa'], ['aa-aa-aa']) === 'aa-aa',
	detectNearestLocale(['aa-aa', 'aa'], ['aa-aa-aa']) === 'aa-aa',
].every(b => b));
