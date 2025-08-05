// 1 об'єкт студента + метод + call/apply/bind

const student = {
	name: '',
	specialty: '',
	avg_score: 0,
	missed_classes: 0,
	printInfo() {
		console.log(
			`Ім'я: ${this.name}, Спеціальність: ${this.specialty}, ` +
			`Середній бал: ${this.avg_score}, Пропущено занять: ${this.missed_classes}`
		);
	}
};

const student1 = {
	name: 'Олег',
	specialty: 'Інформатика',
	avg_score: 4.5,
	missed_classes: 2
};

const student2 = {
	name: 'Марія',
	specialty: 'Фізика',
	avg_score: 4.8,
	missed_classes: 0
};

const student3 = {
	name: 'Іван',
	specialty: 'Математика',
	avg_score: 3.9,
	missed_classes: 5
};

// call
student.printInfo.call(student1);
// apply
student.printInfo.apply(student2);
// bind
const printIvan = student.printInfo.bind(student3);
printIvan();

// 2 дві кнопки + події
document.getElementById('html_btn').addEventListener('click', () => {
	alert('HTML — мова розмітки гіпертексту, основа структури веб-сторінок.');
});

document.getElementById('css_btn').addEventListener('click', () => {
	alert('CSS — мова стилів для оформлення зовнішнього вигляду HTML-документів.');
});

// 3 функція магазин

function store(product, price_per_kg, weight_kg) {
	const total = price_per_kg * weight_kg;
	return `Товар: ${product}, Вартість: ${total.toFixed(2)} грн`;
}

console.log(store('banana', 30, 4.5));   // Товар: banana, Вартість: 135.00 грн
console.log(store('cherry', 58, 1.3));   // Товар: cherry, Вартість: 75.40 грн
console.log(store('jrange', 89, 3.4));   // Товар: jrange, Вартість: 302.60 грн
