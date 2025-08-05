function Calculator() {
	this.a = 0;
	this.b = 0;

	this.read = function () {
		this.a = Number(prompt('Введіть перше число:'));
		this.b = Number(prompt('Введіть друге число:'));
	};

	this.sum = function () {
		return this.a + this.b;
	};

	this.mul = function () {
		return this.a * this.b;
	};
}

// приклад використання
const calc = new Calculator();
calc.read();
console.log('Сума:', calc.sum());
console.log('Множення:', calc.mul());
