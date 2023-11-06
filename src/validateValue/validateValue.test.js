const validateValue= require('./validateValue')
test("Название теста", ()=> {
    expect(validateValue(50)).toBe(true);
})