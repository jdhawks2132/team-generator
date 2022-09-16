const Intern = require('../lib/Intern');

describe('Intern', () => {
	describe('Initialization', () => {
		it('should create an object with a name, id, email, and school if provided valid arguments', () => {
			const intern = new Intern('John', 1, 'john@test.com', 'TAMU');

			expect(intern.name).toEqual('John');
			expect(intern.id).toEqual(1);
			expect(intern.email).toEqual('john@test.com');
			expect(intern.school).toEqual('TAMU');
		});
	});

	describe('getSchool', () => {
		it('should return the school of the intern', () => {
			const intern = new Intern('John', 1, 'john@test.com', 'TAMU');

			expect(intern.getSchool()).toEqual('TAMU');
		});
	});

	describe('getRole', () => {
		it('should return the role of the intern', () => {
			const intern = new Intern('John', 1, 'john@test.com', 'TAMU');

			expect(intern.getRole()).toEqual('Intern');
		});
	});
});
