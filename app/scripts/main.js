/**
 * @jsx React.DOM
 */

 'use strict'

var React = require('react/addons');
var NumberInput = require('./number-input');

window.React = React;
React.initializeTouchEvents(true);


var Calculator  = React.createClass({

	render: function() {
		var equalSymbol = '=';

		return (
			<div className="container calculator clearfix js-calculator">
				<NumberInput />
			    <button className="btn btn-one js-1">1</button>
			    <button className="btn btn-two js-2">2</button>
			    <button className="btn btn-three js-3">3</button>
			    <button className="btn btn-divide js-divide">/</button>
			    <button className="btn btn-multiply js-multiply">x</button>
			    <button className="btn btn-four js-4">4</button>
			    <button className="btn btn-five js-5">5</button>
			    <button className="btn btn-six js-6">6</button>
			    <button className="btn btn-seven js-7">7</button>
			    <button className="btn btn-eight js-8">8</button>
			    <button className="btn btn-nine js-9">9</button>
			    <button className="btn btn-add js-add">+</button>
			    <button className="btn btn-subtract js-subract">-</button>
			    <button className="btn btn-dot js-dot">.</button>
			    <button className="btn btn-zero js-0">0</button>
			    <button className="btn btn-equal js-equal">{equalSymbol}</button>
			</div>
		);
	}

});

React.renderComponent(<Calculator />, document.getElementById('root') );
