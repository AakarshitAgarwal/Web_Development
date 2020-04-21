const express=require('express');
var exphbs  = require('express-handlebars');

const app=express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());  //middleware-->executes before the remaining code run(i.e at localhost:5000/ port) 
app.use(express.urlencoded({extended:false})); //form se data send kr rhe h!

app.use('/',require('./controllers/controller'));  //localhost:5000/xyz
 
app.get('/abc',(req,res)=>{
    res.render('showdata');
})
app.get('/xyz',(req,res)=>{
    res.render('home');
})
const PORT=5000;
app.listen(PORT,()=>{console.log(`Server is running at ${PORT}`)});

