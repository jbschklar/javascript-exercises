const repeatString = function (string, num) {
	let outPut = [];
	if (num < 0) return "ERROR";
	for (let i = 0; i < num; i++) {
		outPut.push(string);
	}
	return outPut.join("");
};

// console.log(repeatString("hey", 10));
// Do not edit below this line
module.exports = repeatString;
