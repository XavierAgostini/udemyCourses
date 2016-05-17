var React = require('react');
var GreeterForm = require('GreeterForm');
var GreeterMessage = require('GreeterMessage');

var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name: 'React',
			message: 'This is from a component'
		}
	},
	getInitialState: function() {
		return {
			name: this.props.name,
			message: this.props.message		
		}
	},
	handleNewData: function(updates) {
		this.setState({
			name: updates.name,
			message: updates.message
		});	
	},
	render: function () {
		var name = this.state.name;
		var message = this.state.message;
		return (
			<div>
				<GreeterMessage name={name} message={message}/>				
				<GreeterForm onNewName={this.handleNewData}/>
			</div>

		);
	}
});

module.exports = Greeter;