const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should generate greeting from name', () => {
    const result = generateGreeting('Akanksha');
    expect(result).toBe('Hello Akanksha!');
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
})

