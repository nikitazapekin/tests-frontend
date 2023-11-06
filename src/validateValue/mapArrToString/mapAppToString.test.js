const mapAppToString= require('./mapAppToString')
 


describe("Несколько тестов", ()=> {
    test("Коррект,ное значение", ()=> {
        expect(mapAppToString([1,2,3])).toEqual(['1', '2', '3']);
    })
    



    test("Мешанина", ()=> {
        expect(mapAppToString([1,2,3, null, undefined])).toEqual(['1', '2', '3']);
    })
    
 
    
    test("пустота", ()=> {
        expect(mapAppToString([])).toEqual([]);
    })
    

    
    
    test("отрицание", ()=> {
        expect(mapAppToString([1,2,3])).not.toEqual([2,3]);
    })
   
})