
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
	storedNumber: '0',
	screenNumber: '', 
	isScreenResult: false,
	operationType:  null
};

/*
	on digit click 
		if !operationType 
			appendNumberToScreen(num)

		if isScreenResult and or opType 
			saveNumberToStore()
			clearScreen()
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
var _numbers = {
	storedNumber: '0',
	screenNumber: '54', 
	isScreenResult: false,
	operationType: null
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
	var result = _numbers.input + _numbers.buffer;

	updateInput(result);
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
		return _numbers.input;
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

AppDispatcher.register(function (payload) {
	var action = payload.action;

	switch(action.actionType) {
		case Constants.CALCULATOR_UPDATE_INPUT: 
		updateInput(action.number);
		break;

		default:
		return true;
	}

	Store.emitChange();

	return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = Store;