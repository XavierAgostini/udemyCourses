var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// Load foundation
$(document).foundation();

// Load app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<p>React Boiler Plate</p>,
	document.getElementById('app')
);
