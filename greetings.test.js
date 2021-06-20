const greetings = require('./greetings');

describe('greetings', () => {
    const name = "Elizabeth";
    it('should return Hello + user name', () => {
        expect(greetings(name)).toBe(`Hello ${name}`);
    });

    it('should return Hello there!', () => {
        expect(greetings()).toBe('Hello there!');
    });

    it('should return the entire string in uppercase', () => {
        expect(greetings(name.toUpperCase())).toBe(`HELLO ${name.toUpperCase()}`);
    });

    it('should return string with two names', () => {
        const nameArray = ['Jose', 'Pep'];
        const result = greetings(nameArray);
        expect(typeof result).toBe('string');
        expect(result).toBe(`Hello ${nameArray[0]}, ${nameArray[1]}`);
    });

    it('should return string with two names', () => {
        const nameArray = ['Caro', 'Alan', 'Pol', 'Fer'];
        const result = greetings(nameArray);
        expect(typeof result).toBe('string');
        expect(result).toBe(`Hello ${nameArray[0]}, ${nameArray[1]}, ${nameArray[2]}, ${nameArray[3]}`);
    });
});

// REPO  https://github.com/Oscartic/unitTestingActivity 