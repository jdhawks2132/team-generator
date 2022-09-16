const Manager = require('../lib/Manager');

describe('Manager', () => {
	describe('Initialization', () => {
		it('should create an object with a name, id, email, and office number if provided valid arguments', () => {
			const manager = new Manager('John', 1, 'john@test.com', '555-555-5555');

			expect(manager.name).toEqual('John');
			expect(manager.id).toEqual(1);
			expect(manager.email).toEqual('john@test.com');
			expect(manager.officeNumber).toEqual('555-555-5555');
		});
	});

	describe('getOfficeNumber', () => {
		it('should return the office number of the manager', () => {
			const manager = new Manager('John', 1, 'john@test.com', '555-555-5555');

			expect(manager.getOfficeNumber()).toEqual('555-555-5555');
		});
	});

	describe('getRole', () => {
		it('should return the role of the manager', () => {
			const manager = new Manager('John', 1, 'john@test.com', '555-555-5555');

			expect(manager.getRole()).toEqual('Manager');
		});
	});
});
