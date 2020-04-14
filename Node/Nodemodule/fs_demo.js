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
// fs.writeFile(path.join(__dirname,'/test1','hello.txt'),'kuch bhi!!!',function(err){
//     if(err) throw err;
//     console.log("file created")
// })
// //--->this will add a text in the file not append in the file

// Append  file
// fs.appendFile(path.join(__dirname,'/test1','hello.txt'),":::kya hua??",(err,data)=>{
//     if(err) throw err;
//     console.log("File appended");
// })

//Read the file
// fs.readFile(path.join(__dirname,'/test1','hello.txt'),'',(err,data)=>{
//     if(err) throw err;
//     console.log("data is "+data);
// })

//rename the file
fs.rename(path.join(__dirname,'/test1','hello.txt'),path.join(__dirname,'/test1','hi.txt'),(err,data)=>{
    if(err) throw err;
    console.log("file is renamed!!!");
})