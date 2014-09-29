/**
 * @jsx React.DOM
 */

 'use strict'

var React = require('react/addons');
var Calculator = require('./components/calculator');

window.React = React;
React.initializeTouchEvents(true);

React.renderComponent(<Calculator />, document.getElementById('root') );
