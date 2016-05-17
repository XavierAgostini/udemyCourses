var React = require('react');

var Main = (props) => {
	return (
		<div>	
			<div>
			<p>Main.jsx Rendered</p>
				<div className="columns medium-6 large-4 small-centered">
					{props.children}
				</div>
			</div>
		</div>
	);
}
module.exports = Main;