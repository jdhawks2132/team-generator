const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
	describe('Initialization', () => {
		it('should create an object with a name, id, email, and github if provided valid arguments', () => {
			const engineer = new Engineer('John', 1, 'john@gmail.com', 'johnnyboy');

			expect(engineer.name).toEqual('John');
			expect(engineer.id).toEqual(1);
			expect(engineer.email).toEqual('john@gmail.com');
			expect(engineer.github).toEqual('johnnyboy');
		});
	});

	describe('getGithub', () => {
		it('should return the github username of the engineer', () => {
			const engineer = new Engineer('John', 1, 'john@gmail.com', 'johnnyboy');

			expect(engineer.getGithub()).toEqual('johnnyboy');
		});
	});

	describe('getRole', () => {
		it('should return the role of the engineer', () => {
			const engineer = new Engineer('John', 1, 'john@gmail.com', 'johnnyboy');

			expect(engineer.getRole()).toEqual('Engineer');
		});
	});
});
