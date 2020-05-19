const mongoose = require('mongoose');

//database-->we have to make the schema since mongodb don't have it's own schema
var employeeSchema = new mongoose.Schema({
    fullName:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
});

var Empolyee1 =mongoose.model('Employee',employeeSchema); //EmployeDB --> Employees -->fullname,email,mobile,city
module.exports = Empolyee1;  //Empolyee1 exported to use in other file i.e db.js

//jbtk ek bhi data nh hoga compass mein data nh banta