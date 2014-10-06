/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var NumberInput = require('./number-input');
var ButtonDigit = require('./button-digit');
var ButtonOperation = require('./button-operation');
var Store = require('../stores/Store');
var Actions = require('../actions/Actions');

var Calculator = React.createClass({

	getInitialState: function() {
		return {
			input: Store.get()
		};
	},

	componentDidMount: function() {
		Store.addChangeListener(this._onChange);
	},

	componentWillMount: function() {
		Store.removeChangeListener(this._onChange);
	},

	render: function() {
		var equalSymbol = '=';
		
		return (
			<div className="container calculator clearfix">
				<NumberInput value={this.state.input} />
				<ButtonDigit text="1" />
				<ButtonDigit text="2" />
				<ButtonDigit text="3" />
				<ButtonOperation text="/" onClick={Actions.divide} />
				<ButtonOperation text="x" onClick={Actions.multiply} />
				<ButtonDigit text="4" />
				<ButtonDigit text="5" />
				<ButtonDigit text="6" />
				<ButtonDigit text="7" />
				<ButtonDigit text="8" />
				<ButtonDigit text="9" />
				<ButtonOperation text="+" onClick={Actions.add} />
				<ButtonOperation text="-" onClick={Actions.subtract}  />
				<ButtonDigit text="." />
				<ButtonDigit text="0" />
				<ButtonOperation text="=" onClick={Actions.divide} />
			</div>
		);
	},

	_onChange: function () {
		this.setState({
			input: Store.get() 
		});
	}
});

module.exports = Calculator;