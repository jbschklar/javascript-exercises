const palindromes = function (str) {
	const newStr = str.toLowerCase().replace(/[ ,.!]/g, "");
	const reverseStr = newStr.split("").reverse().join("");

	return newStr === reverseStr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
