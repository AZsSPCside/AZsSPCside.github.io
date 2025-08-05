// 1
// Робота зі змінними
let name = 'Іван';
let city = name;
console.log(city); // Іван

// 2
// Який буде результат виконання скрипта?
let name2 = 'Olga';
console.log(`привіт ${1}`); // привіт 1
console.log(`привіт ${"name"}`); // привіт name
console.log(`привіт ${name2}`); // привіт Olga

// 3
// Видобути число зі змінних
let a = '5';
let b = '13cvb';
let c = '12.9sxdcfgv';

console.log(Number(a)); // 5
console.log(Number.parseInt(b)); // 13
console.log(Number.parseFloat(c)); // 12.9

console.log(typeof Number(a)); // number
console.log(typeof Number.parseInt(b)); // number
console.log(typeof Number.parseFloat(c)); // number

// 4
// Зробіть, щоб 0.1 + 0.2 = 0.3
let sum = 0.1 + 0.2;
console.log(Number(sum.toFixed(1))); // 0.3

// 5
// Поверніть найбільше число с набору 20, 10, 50, 40
console.log(Math.max(20, 10, 50, 40)); // 50

// 6
// Поверніть випадкове число в діапазоні від 2 до 4
console.log(Math.random() * (4 - 2) + 2);

// 7
// дізнатись довжину message
const message = 'Welcome to Bahamas!';
console.log(message.length); // 19

// 8
// вивести в консоль message великими літерами
console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// 9
// створити пустий об'єкт
let person = {};
person.name = 'Іван';
person.age = 30;
person.city = 'Київ';
console.log(person);

delete person.city;
person['like flowers'] = true;
console.log(person);

// 10
// За допомогою циклу “for…in” вивести в консоль ключі і значення об'єкта
for (let key in person) {
	console.log(`${key}: ${person[key]}`);
}
