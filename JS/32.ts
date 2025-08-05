// 1 printNumbers: setInterval
function printNumbersInterval(from: number, to: number): void {
	let current = from;
	const timer = setInterval(() => {
		console.log(current);
		if (current === to) clearInterval(timer);
		current++;
	}, 1000);
}

// 1 printNumbers: setTimeout
function printNumbersTimeout(from: number, to: number): void {
	let current = from;
	function go() {
		console.log(current);
		if (current < to) {
			setTimeout(go, 1000);
		}
		current++;
	}
	go();
}

// приклад використання
// printNumbersInterval(1, 5);
// printNumbersTimeout(1, 5);


// 2 delay(ms): Promise-альтернатива setTimeout
function delay(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// приклад використання
// delay(3000).then(() => console.log('виконалось через 3 секунди'));
