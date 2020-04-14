const fs=require('fs');
const path =require('path');

//Create folder
//  fs.mkdir(path.join(__dirname,'/test1'),{},function(err){
//      if(err) throw err;
//      else{
//          console.log("folder created");
//      }
//  })
  //{}-->blank object,function(err)--->call back function


//create and write to file
fs.writeFile(path.join(__dirname,'/test1','hello.txt'),'kuch bhi!!!',function(err){
    if(err) throw err;
    console.log("file created")
})