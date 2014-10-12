'use strict';

jest.dontMock('../../constants/Constants');
jest.dontMock('../Store');
jest.dontMock('react/lib/merge');

describe('Store', function () {
	var Constants = require('../../constants/Constants');

	var actionInsertDigit = {
		source: 'VIEW_ACTION',
		action: {
			actionType: Constants.CALCULATOR_INSERT_DIGIT,
			number: 'replace'
		} 
	};

	var actionAdd = {
		source: 'VIEW_ACTION',
		action: {
			actionType: Constants.CALCULATOR_ADD
		} 
	};

	var actionSubtract = {
		source: 'VIEW_ACTION',
		action: {
			actionType: Constants.CALCULATOR_SUBTRACT
		} 
	};

	var actionMultiply = {
		source: 'VIEW_ACTION',
		action: {
			actionType: Constants.CALCULATOR_MULTIPLY
		} 
	};

	var actionDivide = {
		source: 'VIEW_ACTION',
		action: {
			actionType: Constants.CALCULATOR_DIVIDE
		} 
	};

	var AppDispatcher,
	    Store,
	    callback;

	beforeEach(function () {
		AppDispatcher = require('../../dispatchers/AppDispatcher');
		Store = require('../Store');
		callback = AppDispatcher.register.mock.calls[0][0];
	});

	it('should register a callback with the dispatcher', function () {
		expect(AppDispatcher.register.mock.calls.length).toBe(1);
	});

	it('should start with default values', function () {
		var _numbers = {
			storedNumber: '',
			screenNumber: '', 
			isScreenResult: false,
			operationType: undefined 
		};

		expect(Store.getAll()).toEqual(_numbers);
	});
	
	it('should update screen with new number', function () {
		var _numbers = {
			storedNumber: '',
			screenNumber: '5', 
			isScreenResult: false,
			operationType: undefined 
		};

		actionInsertDigit.action.number = '5';

		callback(actionInsertDigit);

		expect(Store.getAll()).toEqual(_numbers);
	});


	it('should concat with new digit', function () {
		var _numbers = {
			storedNumber: '',
			screenNumber: '54', 
			isScreenResult: false,
			operationType: undefined 
		};

		actionInsertDigit.action.number = '5';
		callback(actionInsertDigit);
		actionInsertDigit.action.number = '4';
		callback(actionInsertDigit);

		expect(Store.getAll()).toEqual(_numbers);
	});

	it('should on Operation click + ', function () {
		var _numbers = {
			storedNumber: '',
			screenNumber: '54', 
			isScreenResult: false,
			operationType: '+'
		};

		actionInsertDigit.action.number = '5';
		callback(actionInsertDigit);
		actionInsertDigit.action.number = '4';
		callback(actionInsertDigit);
		callback(actionAdd);

		expect(Store.getAll()).toEqual(_numbers);
	});

	it('should clicking in 4 add ', function () {
		var _numbers = {
			storedNumber: '54',
			screenNumber: '4', 
			isScreenResult: false,
			operationType: '+'
		};

		actionInsertDigit.action.number = '5';
		callback(actionInsertDigit);
		actionInsertDigit.action.number = '4';
		callback(actionInsertDigit);
		callback(actionAdd);
		actionInsertDigit.action.number = '4';
		callback(actionInsertDigit);

		expect(Store.getAll()).toEqual(_numbers);
	});

	it('should add another digit', function () {
		var _numbers = {
			storedNumber: '54',
			screenNumber: '40', 
			isScreenResult: false,
			operationType: '+'
		};

		actionInsertDigit.action.number = '5';
		callback(actionInsertDigit);
		actionInsertDigit.action.number = '4';
		callback(actionInsertDigit);
		callback(actionAdd);
		actionInsertDigit.action.number = '4';
		callback(actionInsertDigit);
		actionInsertDigit.action.number = '0';
		callback(actionInsertDigit);

		expect(Store.getAll()).toEqual(_numbers);
	});

});

/*
	TESTS
	
	onOperation click '=' _numbers should be 

		var _numbers = {
			storedNumber: '58',
			screenNumber: '58', 
			isScreenResult: true,
			operationType: null
		};

	onDigit click '2' _numbers should be 

		var _numbers = {
			storedNumber: '',
			screenNumber: '2', 
			isScreenResult: false,
			operationType: null
		};

	onOperation click 'x' _numbers should be 

		var _numbers = {
			storedNumber: '',
			screenNumber: '2', 
			isScreenResult: false,
			operationType: 'x' 
		};

	onDigit click '3' _numbers should be 

		var _numbers = {
			storedNumber: '2',
			screenNumber: '3', 
			isScreenResult: false,
			operationType: 'x' 
		};

	onOperation click '-' _numbers should be 

		var _numbers = {
			storedNumber: '6',
			screenNumber: '6', 
			isScreenResult: true,
			operationType: '-' 
		};

	onOperation click '=' _numbers should be 

		var _numbers = {
			storedNumber: '6',
			screenNumber: '6', 
			isScreenResult: true,
			operationType: '-' 
		};

	onDigit click '7' _numbers should be 

		var _numbers = {
			storedNumber: '6',
			screenNumber: '7', 
			isScreenResult: false,
			operationType: '-' 
		};

	onOperation click '=' _numbers should be 

		var _numbers = {
			storedNumber: '-1',
			screenNumber: '-1', 
			isScreenResult: true,
			operationType: null 
		};

 */

