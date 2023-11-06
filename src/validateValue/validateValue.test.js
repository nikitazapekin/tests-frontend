const validateValue= require('./validateValue')
test("Название теста", ()=> {
    expect(validateValue(50)).toBe(true);
})




describe("Несколько тестов", ()=> {
    test("Коррект,ное значение", ()=> {
        expect(validateValue(50)).toBe(true);
    })
    
    test("меньше корректного", ()=> {
        expect(validateValue(-1)).toBe(false);
    })
    
    test("Больше корректного", ()=> {
        expect(validateValue(101)).toBe(false);
    })
    
    test("Граница сверху", ()=> {
        expect(validateValue(100)).toBe(true);
    })
    
    test("Граница снизу", ()=> {
        expect(validateValue(0)).toBe(true);
    })     
})