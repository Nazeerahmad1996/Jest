const sub = require('./substract')


test("Test for substract function", ()=> {
    expect(
        sub(4,1)
    ).toBe(3)
})