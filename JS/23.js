// 1 масив імен з об'єктів
const fruts = [
	{ id: 0, name: 'Apple' },
	{ id: 1, name: 'Tomat' },
	{ id: 2, name: 'Cherry' },
	{ id: 3, name: 'Orange' }
];

const names = fruts.map(fruit => fruit.name);
console.log(names);  // ['Apple', 'Tomat', 'Cherry', 'Orange']

// 2 парні числа від 2 до 10
for (let i = 2; i <= 10; i += 2) {
	console.log(i);
}

// 3 заміна for на while
let i = 0;
while (i < 5) {
	console.log(`цифра ${i}!`);
	i++;
}

// 4 цикл з prompt для введення числа > 100
let input;
do {
	input = prompt('Введіть число більше за 100', '');
} while (input !== null && input !== '' && Number(input) <= 100);

// 5 середній вік
const girls = [
	{ age: 23, name: 'Оля' },
	{ age: 29, name: 'Аня' },
	{ age: 10, name: 'Юля' },
	{ age: 20, name: 'Катя' }
];

const total_age = girls.reduce((sum, girl) => sum + girl.age, 0);
const avg_age = total_age / girls.length;
console.log(avg_age);  // 20.5
