const axios = require("axios")
//const mapArrayToString= require("../validateValue/mapArrToString/mapAppToString")
const mapAppToString = require("../../validateValue/mapArrToString/mapAppToString")
const getData=async ()=> {

    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const userIds = response.data.map(item=> item.id)
        return mapAppToString(userIds)

    } catch(e){

    }
}
module.exports= getData