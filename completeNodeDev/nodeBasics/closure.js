function createAdder(baseNumber) {
	return function (numberToAdd) {
		return baseNumber + numberToAdd;
	}
}
var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(40));
// console.log(addTen)