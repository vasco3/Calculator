var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/Constants');

var Actions = {
	/**
	 * Add numbers
	 */
	 add: function () {
	 	AppDispatcher.handleViewAction({
	 		actionType: Constants.CALCULATOR_ADD
	 	});
	 },

	 /**
	  * Subtract numbers
	  */
	 subtract: function () {
	 	AppDispatcher.handleViewAction({
	 		actionType: Constants.CALCULATOR_SUBTRACT
	 	});
	 },

	 /**
	  * Multiply numbers
	  */
	 multiply: function () {
	 	AppDispatcher.handleViewAction({
	 		actionType: Constants.CALCULATOR_MULTIPLY
	 	});
	 },

	 /**
	  * Divide numbers
	  * @param {string} text
	  */
	 divide: function () {
	 	AppDispatcher.handleViewAction({
	 		actionType: Constants.CALCULATOR_DIVIDE
	 	});
	 },

	 /**
	  * Update Input of numbers
	  * @param {string} number 
	  */
	 updateInput: function (number) {
	 	AppDispatcher.handleViewAction({
	 		actionType: Constants.CALCULATOR_UPDATE_INPUT,
	 		number: number 
	 	});
	 }
};

module.exports = Actions;