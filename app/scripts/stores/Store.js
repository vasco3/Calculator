
var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

/**
 * Stores data for calculations. Inits defaults.
 * @type {Object}
 */
var _numbers = {
	storedNumber: '',
	screenNumber: '', 
	isScreenResult: false,
	operationType: undefined 
};

/**
 * Concats digits to the input buffer
 * @param  {string} number
 */
function appendNumberToScreen (number) {
	_numbers.screenNumber += number;
}

function saveNumberToStore () {
	_numbers.storedNumber = _numbers.screenNumber;
}

function clearScreen () {
	_numbers.screenNumber = '';
}

function setOperationType (operationType) {
	_numbers.operationType = operationType;
}

function add () {
	var num1 = Number(_numbers.storedNumber),
		num2 = Number(_numbers.screenNumber);

	return num1 + num2;
}

function subtract () {
	var num1 = Number(_numbers.storedNumber),
		num2 = Number(_numbers.screenNumber);

	return num1 - num2;
}

function multiply () {
	var num1 = Number(_numbers.storedNumber),
		num2 = Number(_numbers.screenNumber);

	return num1 * num2;
}

function divide () {
	var num1 = Number(_numbers.storedNumber),
		num2 = Number(_numbers.screenNumber);

	return num1 / num2;
}

function resetStoredNumber () {
	_numbers.storedNumber = '';
}

/**
 * Store
 */
var Store = merge(EventEmitter.prototype, {
	/**
	 * gets the _numbers to pass as props for Calculator
	 * @return {string}
	 */
	get: function () {
		return _numbers.screenNumber;
	},

	getAll: function () {
		return _numbers;
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {Function} callback
	 */
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	/**
	 * @param  {Function} callback
	 */
	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});


/*
	on digit click 
		if isScreenResult and or operationType 
			saveNumberToStore()
			clearScreen()
			appendNumberToScreen(num)

		if !operationType 
			appendNumberToScreen(num)

	onOperation click
		if !operationType 
			setOperationType(o)

		if operationType
			applies operationType to stored and screenNumber
			saves result in 

			changes the operation constant in _numbers
			then it looks for the operationType

 */

AppDispatcher.register(function (payload) {
	var action = payload.action;

	switch(action.actionType) {
		case Constants.CALCULATOR_INSERT_DIGIT: 
			if (!_numbers.stored) {
				if (_numbers.operationType) {
					saveNumberToStore();
					clearScreen();
				}
			}

			appendNumberToScreen(action.number);
			break;

		case Constants.CALCULATOR_ADD: 
			setOperationType(add);
			break;

		case Constants.CALCULATOR_SUBTRACT: 
			setOperationType(subtract);
			break;

		case Constants.CALCULATOR_MULTIPLY: 
			setOperationType(multiply);
			break;

		case Constants.CALCULATOR_DIVIDE: 
			setOperationType(divide);
			break;
			
		case Constants.CALCULATOR_EQUAL: 
			var result = _numbers.operationType();
			
			clearScreen();
			
			appendNumberToScreen(result);
			
			resetStoredNumber();
			
			setOperationType(undefined);
			break;

		default:
		return true;
	}

	Store.emitChange();

	return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = Store;