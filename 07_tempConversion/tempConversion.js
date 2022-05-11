const ftoc = function (degF) {
	const degC = Math.round((degF - 32) * (5 / 9) * 10) / 10;
	return degC;
};

const ctof = function (degC) {
	const degF = Math.round((degC * (9 / 5) + 32) * 10) / 10;
	return degF;
};

// Do not edit below this line
module.exports = {
	ftoc,
	ctof,
};
