var person = {
	gender: 'male',
	height: '6foot"2'
};
person.firstName = 'Bob';
person.lastName = 'Pickle';
person.age = "24";
delete person.age;
console.log(person);
function greetUser(person) {
	console.log("Hello " +person['lastName'] + " " + person.lastName);
}
greetUser(person);
