//I will store some data afterwards
const mysql=require('mysql');
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'testing'
})
db.connect((err)=>{
    if(err) throw err;
    console.log('Database Connected');
})

module.exports=db;