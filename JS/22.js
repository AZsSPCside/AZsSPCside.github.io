// 1. Якщо змінна більше нуля - виведіть true, менше - false
function checkPositive(n) {
	return n > 0;
}

console.log(checkPositive(1));   // true
console.log(checkPositive(0));   // false
console.log(checkPositive(-3));  // false

// 2. Якщо змінна == "test" - виведіть true
function isTest(val) {
	return val === 'test';
}

console.log(isTest('test'));    // true
console.log(isTest("qwerty"));  // false
console.log(isTest(true));      // false

// 3. Якщо змінна більше 10 - відніміть 5, менше - додайте 5
function modifyNumber(n) {
	if (n > 10) return n - 5;
	if (n < 10) return n + 5;
	return n;
}

console.log(modifyNumber(1));   // 6
console.log(modifyNumber(10));  // 10
console.log(modifyNumber(13));  // 8

// 4. Сервіс: число від 1 до 12 — вивести назву місяця
function getMonth(num) {
	const months = [
		'січень', 'лютий', 'березень', 'квітень',
		'травень', 'червень', 'липень', 'серпень',
		'вересень', 'жовтень', 'листопад', 'грудень'
	];
	if (num >= 1 && num <= 12) return months[num - 1];
	return 'невірне число';
}

console.log(getMonth(1));   // січень
console.log(getMonth(12));  // грудень
console.log(getMonth(0));   // невірне число

// 5. Сервіс: тризначне число — повернути суму цифр
function sumDigits(n) {
	const str = String(Math.abs(n));
	if (str.length !== 3) return 'не тризначне число';
	return str.split('').reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumDigits(123));  // 6
console.log(sumDigits(999));  // 27
console.log(sumDigits(42));   // не тризначне число
