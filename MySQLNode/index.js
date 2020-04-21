const express=require('express');
var exphbs  = require('express-handlebars');

const app=express();

app.use(express.json());  //middleware-->executes before the remaining code run(i.e at localhost:5000/ port)
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/',require('./controllers/controller'));

app.get('/abc',(req,res)=>{
    res.render('showdata');
})
const PORT=5000;
app.listen(PORT,()=>{console.log(`Server is running at ${PORT}`)});

