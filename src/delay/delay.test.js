const delay= require("./delay")


describe("sdelay", ()=> {
test("sd", async ()=> {
    const sum=await delay(()=> 5+5, 1000)
    expect(sum).toBe(10)
})
})