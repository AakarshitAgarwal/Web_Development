const express  = require('express');
var router = express.Router();
const Employee1 = require('../models/employee.model');

router.get('/',(req,res)=>{  //localhost:3000/employee
    res.render('employee/addOrEdit',{
        viewTitle:'Insert Employee'
    });
});

router.post('/',(req,res)=>{   //localhost:3000/employee -->post
    if(req.body._id == '')   //id == '' jo addoredits wahi html mein likha hoga wo uth kr a rh hoga id mein
    InsertRecord(req,res);
    else
    UpdateRecord(req,res);
});

router.get('/list',(req,res)=>{
    Employee1.find((err,docs)=>{//db.posts.find() Employee1 = EmployeDB.employees
        if(!err){
            //console.log(result)
            res.render("employee/list",{  //localhost:3000/employee/list
           // list:result
           list:docs
            });
        }
        else
        console.log('Error in retrieving employee list'+err);
    });

});

router.get('/:id',(req,res)=>{//localhost:3000/employee/12345566
    Employee1.findById(req.params.id,(err,doc)=>{
        res.render("employee/addOrEdit",{
            viewTitle : 'Update Employee',
            employee:doc
        })
    });

});

router.get('/delete/:id',(req,res)=>{
    Employee1.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.redirect('/employee/list');}
    });

});


function InsertRecord(req,res){

    var employee = new Employee1();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city; 
    employee.save((err,doc)=>{   //save database in db
        if(!err) 
        res.redirect('employee/list');   //redirect-->urls check | render-->checks view folder
        else 
        console.log('Error during record insertion'+err);
    });
}

function UpdateRecord(req,res){
    Employee1.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,doc)=>{ //req.body mein ye sari cheeze a jaengi(i.e fullname,mobile ....)
        if(!err){res.redirect('employee/list');}
    });

}


module.exports = router;