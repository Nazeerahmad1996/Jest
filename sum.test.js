const sum = require('./sum')

test('Sum of two numbers', () => {
    expect(
        sum(1,3)
    ).toBe(4)
})