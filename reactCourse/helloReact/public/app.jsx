var React = require('react');
var ReactDOM = require('react-dom');

var Greeter = require('Greeter');


var name = "Jen Dylan Jr.";
var message = "This is a hello world react program";



ReactDOM.render(
	<Greeter name={name} message={message}/>,
	document.getElementById('app')
);
