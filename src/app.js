const express = require('express')
const app = express()
const PORT = 1111;
const path = require('path')
let fs = require('fs');
const contactValidator = require('./validations/contactValidator');

//---------View engine setup------------------

app.set('views', path.join(__dirname, 'views')); 

app.set('view engine','ejs'); 

/* Middlewares */

app.use(express.static(path.join(__dirname, '../public')));


/* Router */
let index = require('./routes/indexRouter')
app.use('/', index);


/* Controller */




app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}
http://localhost:${PORT}
`));


/* ----------- ERROR 404 ---------------*/
/* app.use((req, res, next) => {
    res.status(404).render('404-page') 
    })
     */