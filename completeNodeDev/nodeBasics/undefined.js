function greeting(name) {
	if(typeof name === 'undefined') {
		console.log('name is not defined');
	} else {
		console.log('Welcome ' + name +'!');
	}
}
greeting();
greeting('Bob');
