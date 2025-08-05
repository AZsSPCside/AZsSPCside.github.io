class Abonent {
	constructor(name, phone) {
		this.name = name;
		this.phone = phone;
	}

	set(name, phone) {
		this.name = name;
		this.phone = phone;
	}

	get() {
		console.log(`Ім'я: ${this.name}, Телефон: ${this.phone}`);
	}
}

// створення трьох абонентів
const user1 = new Abonent('Олег', '0501234567');
const user2 = new Abonent('Марія', '0637654321');
const user3 = new Abonent('Ірина', '0971122334');

// виведення даних
user1.get(); // Ім'я: Олег, Телефон: 0501234567
user2.get(); // Ім'я: Марія, Телефон: 0637654321
user3.get(); // Ім'я: Ірина, Телефон: 0971122334
