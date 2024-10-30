const fs = require("fs")

const addPerson = (id, fname, lname, age, city) => {
    const allData = loadData()
    if (allData.length >= 10) {
        console.log("Cannot add more than 10 users.");
        return;
    }
    const checkId = allData.filter((obj)=>{
        return obj.id === id
    })
    if(checkId.length == 0){
    allData.push({
        fname: fname,
        lname: lname,
        id: id,
        city: city,
        age: age
    })

    saveData(allData)
    }
    else{
        console.log("ERROR DUPLICATED DATA")
    }}

const loadData = () => {
    try {
        const dataString = fs.readFileSync("data10.json").toString()
        return JSON.parse(dataString)
    }
    catch {
            return[]
    }
}

const saveData = (allData) => {
    const allDataToJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json", allDataToJson)
}

const deleteData = (id) =>{
    const allData = loadData()
    const restOfData = allData.filter((obj)=> {
        return obj.id !== id
    })
    if(restOfData.length != allData.length){
    saveData(restOfData)
    console.log("Record deleted successfully")
    }else{
        console.log("RECORD NOT FOUND")
    }
}
const deleteAll = () =>{
    const restOfData = []
    saveData(restOfData)
    console.log("Records deleted successfully")
  
}

const readData = (id) =>{
    const allData = loadData()
    const data = allData.find((obj)=> {
        return obj.id == id
    })
      
    if(data)
        console.log(data)
    else
    console.log("ID NOT FOUND")
}

const listData = () =>{
    const allData = loadData()
    allData.forEach((obj) =>{
        console.log(obj.fname, obj.lname)
    })
}

module.exports = {
    addPerson,
    deleteData,
    readData,
    listData,
    deleteAll
}