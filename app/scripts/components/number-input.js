/**
 * @jsx React.DOM
 */

var React = require('react');

var NumberInput = React.createClass({
	propTypes: {
		value: React.PropTypes.string
	},

	getInitialState: function() {
		return {
			value: this.props.value || '0' 
		};
	},

	render: function() {
		return (
		    <input className="display" 
		    	readOnly
		    	value={this.props.value}
		    	type="text" />
		);
	},

	/**
	 * on input Change
	 * @param  {object} event
	 */
	_onChange: function (event) {
		this.setState({
			value: event.target.value
		});
	}
	
});

module.exports = NumberInput;