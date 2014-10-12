/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Actions = require('../actions/Actions');

var ButtonDigit = React.createClass({

	render: function() {
		var cx = React.addons.classSet;

		var text = this.props.text;

		var classes = cx({
			btn: true,
			"btn-one": text === '1',
			"btn-two": text === '2',
			"btn-three": text === '3',
			"btn-four": text === '4',
			"btn-five": text === '5',
			"btn-six": text === '6',
			"btn-seven": text === '7',
			"btn-eight": text === '8',
			"btn-nine": text === '9',
			"btn-zero": text === '0',
			"btn-dot": text === '.'
		});


		return (
		    <button onClick={this._onClick}
			    button="button" className={classes}>{text}</button>
		);
	}, 

	_onClick: function () {
		var digit = this.props.text;

		Actions.insertDigit(digit);
	}
});

module.exports = ButtonDigit;

