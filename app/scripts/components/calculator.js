/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var NumberInput = require('./number-input');
var ButtonDigit = require('./button-digit');
var ButtonOperation = require('./button-operation');

var Calculator = React.createClass({

	render: function() {
		var equalSymbol = '=';
		
		return (
			<div className="container calculator clearfix">
				<NumberInput defaultValue="0" />
				<ButtonDigit text="1" />
				<ButtonDigit text="2" />
				<ButtonDigit text="3" />
				<ButtonOperation text="/" />
				<ButtonOperation text="x" />
				<ButtonDigit text="4" />
				<ButtonDigit text="5" />
				<ButtonDigit text="6" />
				<ButtonDigit text="7" />
				<ButtonDigit text="8" />
				<ButtonDigit text="9" />
				<ButtonOperation text="+" />
				<ButtonOperation text="-" />
				<ButtonDigit text="." />
				<ButtonDigit text="0" />
				<ButtonOperation text="="/>
			</div>
		);
	}
});

module.exports = Calculator;