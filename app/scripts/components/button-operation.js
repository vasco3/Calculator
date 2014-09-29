/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

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
		    <button type="button" className={classes}>{text}</button>
		);
	}
});

module.exports = ButtonOperation;

