const express = require('express');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 8000;

//Inport Route
const route = require('./routes');

//Support POST query (body)
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//method-override ( transmit POST -> PUT )
app.use(methodOverride('_method'));

//Database
const db = require('./mongodb');
//Connect DB
db.connect();

//Use static file
app.use(express.static('public'));

//Template Engine, create engine by function then set it to view engine
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    //Function for View Engine
    SUM: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
//Set path view
app.set('views', 'views');

//Use route with "app" (express) parametter
route(app);

//Listen port 
app.listen(port, () => {
  console.log('<< Deploy at http://localhost:' + port + ' >>');
});