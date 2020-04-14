const fs=require('fs');
const path =require('path');

//Create folder
 fs.mkdir(path.join(__dirname,'/test1'),{},function(err){
     if(err) throw err;
     else{
         console.log("folder created");
     }
 })
  //{}-->blank object,function(err)--->call back function
