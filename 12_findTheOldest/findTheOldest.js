const findTheOldest = function (arr) {
	const today = new Date().getFullYear();
	const agesArr = [];
	let oldest = {};

	arr.forEach((obj) => {
		obj.age = (obj.yearOfDeath ? obj.yearOfDeath : today) - obj.yearOfBirth;
		agesArr.push(obj);
	});
	oldest = agesArr[0];
	for (let i = 0; i < agesArr.length; i++) {
		if (agesArr[i].age > oldest.age) oldest = agesArr[i];
	}
	return oldest;
};

// const people = [
// 	{
// 		name: "Carly",
// 		yearOfBirth: 2018,
// 	},
// 	{
// 		name: "Ray",
// 		yearOfBirth: 1962,
// 		yearOfDeath: 2011,
// 	},
// 	{
// 		name: "Jane",
// 		yearOfBirth: 1912,
// 		yearOfDeath: 1941,
// 	},
// ];
// console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
