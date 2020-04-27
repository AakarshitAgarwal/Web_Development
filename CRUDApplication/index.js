const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const employeeController = require('./controllers/employeeController');

const app = express();

//this three lines are for handle bars,diffrent for templating engines
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout'}));
app.set('view engine','hbs');

app.use(express.urlencoded({extended:false}));

app.use(employeeController); // localhost:5000
const PORT = process.env.PORT || 5000;   //agr environment variable mein khali h port to wo dedo wrnaa 5000 to ha hi!

app.listen(PORT,()=>console.log(`Server is running at ${PORT}`));