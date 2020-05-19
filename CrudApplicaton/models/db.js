const mongoose = require('mongoose');  //mongoose is used to provide application in mongodb
mongoose.connect('mongodb://localhost:27017/EmpolyeeDB',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err) {console.log("MongoDB Connected Succesful");}  // useNewUrlParser:true,useUnifiedTopology:true is used to protect u from warning
    else
    console.log("Problem occur"+err);
})
require('./employee.model');