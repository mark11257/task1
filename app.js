
const yargs = require("yargs");
const data10 = require("./data10")
yargs.command({
    command: "add",
    describe: "add a new user",
    builder: {
        fname : {
            type: "string",
            demandOption: true,
            describe: "first name of the user"
        },
        lname : {
            type: "string",
            demandOption: true,
            describe: "last name of the user"
        },
        city : {
            type: "string",
            demandOption: true,
            describe: "city of the user"
        },
        id : {
            type: "number",
            demandOption: true,
            describe: "id of the user"
        },
        age : {
            type: "number",
            demandOption: true,
            describe: "age of the user"
        }
    },
    handler : (x)=> {
        data10.addPerson( x.id, x.fname, x.lname, x.age, x.city)    
    }
})

yargs.command({
    command: "delete",
    describe: "delete a user",
    builder: {
        id: {
            type: "number",
            demandOption: true
        }
    },
    handler: (x)=>{
        data10.deleteData(x.id)
    }
})

yargs.command({
    command: "deleteall",
    describe: "delete all users",
    handler: (x)=>{
        data10.deleteAll()
    }
})

yargs.command({
    command: "read",
    describe: "read a single record",
    builder: {
        id: {
            type: "number",
            demandOption: true
        }
    },
    handler: (x)=>{
        data10.readData(x.id)
    } 
})

yargs.command({
    command: "list",
    describe: "List all data",
    handler:()=>{
        data10.listData()
    }
})

yargs.parse()