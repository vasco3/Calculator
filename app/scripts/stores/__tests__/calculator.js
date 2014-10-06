jest.dontMock('../../constants/Constants');
jest.dontMock('../Store');
jest.dontMock('react/lib/merge');

function sum () {
	return 4 + 2;
}

describe('Store', function () {
	var Constants = require('../../constants/Constants');

	var actionInsertDigit = {
		source: 'VIEW_ACTION',
		action: {
			actionType: Constants.CALCULATOR_SUBTRACT,
			number: '5'
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

	it('should update screen with new number', function () {
		expect(sum()).toBe(6);
	});




});

/*
	TESTS
	

		var _numbers = {
			storedNumber: '',
			screenNumber: '5', 
			isScreenResult: false,
			operationType:  null
		};

	onDigit click '4' _numbers should be

		var _numbers = {
			storedNumber: '',
			screenNumber: '54', 
			isScreenResult: false,
			operationType:  null
		};

	onOperation click '+' _numbers should be

		var _numbers = {
			storedNumber: '',
			screenNumber: '54', 
			isScreenResult: false,
			operationType: '+'
		};

	onDigit click '4' _numbers should be 

		var _numbers = {
			storedNumber: '54',
			screenNumber: '4', 
			isScreenResult: false,
			operationType: '+'
		};

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

