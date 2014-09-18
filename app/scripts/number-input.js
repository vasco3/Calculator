/**
 * @jsx React.DOM
 */

var React = require('react');

var NumberInput = React.createClass({

	render: function() {
		return (
		    <input className="display js-js-display" placeholder="5" type="text" />
		);
	}

});

module.exports = NumberInput;