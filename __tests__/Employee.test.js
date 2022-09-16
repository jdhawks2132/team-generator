const Employee = require('../lib/Employee');

describe('Employee', () => {
	describe('Initialization', () => {
		it('should create an object with a name, id, and email if provided valid arguments', () => {
			const employee = new Employee('John', 1, 'john@test.com');

			expect(employee.name).toEqual('John');
			expect(employee.id).toEqual(1);
			expect(employee.email).toEqual('john@test.com');
		});
	});

	describe('getName', () => {
		it('should return the name of the employee', () => {
			const employee = new Employee('John', 1, 'john@test.com');

			expect(employee.getName()).toEqual('John');
		});
	});

	describe('getId', () => {
		it('should return the id of the employee', () => {
			const employee = new Employee('John', 1, 'john@test.com');

			expect(employee.getId()).toEqual(1);
		});
	});

	describe('getEmail', () => {
		it('should return the email of the employee', () => {
			const employee = new Employee('John', 1, 'john@test.com');

			expect(employee.getEmail()).toEqual('john@test.com');
		});
	});

	describe('getRole', () => {
		it('should return the role of the employee', () => {
			const employee = new Employee('John', 1, 'john@test.com');

			expect(employee.getRole()).toEqual('Employee');
		});
	});
});
