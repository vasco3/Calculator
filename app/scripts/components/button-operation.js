/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Actions = require('../actions/Actions');

var ButtonOperation = React.createClass({

	render: function() {
		var cx = React.addons.classSet;

		var text = this.props.text;

		var classes = cx({
			btn: true,
			"btn-add": text === '+',
			"btn-subtract": text === '-',
			"btn-multiply": text === 'x',
			"btn-divide": text === '/',
			"btn-equal": text === '='
		});

		return (
		    <button type="button" onClick={this._onClick}
		     className={classes}>{text}</button>
		);
	},

	_onClick: function () {
		this.props.onClick;
	}
});

module.exports = ButtonOperation;

