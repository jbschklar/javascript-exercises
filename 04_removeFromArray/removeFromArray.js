const removeFromArray = function () {
	let arr = arguments[0];
	let num = [];
	for (let i = 1; i < arguments.length; i++) {
		num.push(arguments[i]);
	}
	num.forEach((num) => {
		arr.forEach((el) => {
			if (el === num) arr.splice(arr.indexOf(el), 1);
			console.log(el);
		});
	});

	return arr;
};

// console.log(removeFromArray([1, 2, 3, 4, 5], 3, 4, 5));

// Do not edit below this line
module.exports = removeFromArray;
