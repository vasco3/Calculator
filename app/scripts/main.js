/**
 * @jsx React.DOM
 */

 'use strict'

var React = require('react/addons');
var Calculator = require('./calculator');

window.React = React;
React.initializeTouchEvents(true);

React.renderComponent(<Calculator />, document.getElementById('root') );
