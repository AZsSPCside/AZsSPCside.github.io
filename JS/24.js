// 1 використання '?' або '||'
function checkAge(age) {
	return age > 18 ? true : confirm('Батьки дозволили?');
	// або варіант з '||':
	// return age > 18 || confirm('Батьки дозволили?');
}

// 2 функція min(a, b)
function min(a, b) {
	return a < b ? a : b;
}

// 3 стрілкові функції
const ask = (question, yes, no) => {
	confirm(question) ? yes() : no();
};

ask(
	'Ви згодні?',
	() => alert('Ви погодились.'),
	() => alert('Ви скасували виконання.')
);
