var person = {
	name: 'Bob',
	age: 24
};
var personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('______________');
var animal = '{"name": "Halley"}';
var animalObj = JSON.parse(animal);
animalObj.age = 12;
animalJSON = JSON.stringify(animalObj);
console.log(animalJSON);
