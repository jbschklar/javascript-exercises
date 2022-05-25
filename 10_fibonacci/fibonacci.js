const fibonacci = function (num) {
	if (+num < 0) return "OOPS";
	let fibArr = [];
	for (let i = 0; i <= +num; i++) {
		fibArr.push(
			(fibArr[i - 1] ? fibArr[i - 1] : 1) + (fibArr[i - 2] ? fibArr[i - 2] : 0)
		);
		console.log(fibArr[i - 1] + fibArr[i - 2]);
	}
	return fibArr[+num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
