const express = require('express');
const port = 8000;
const app = express();

const router = require('./routes');

app.use(express.urlencoded());
app.use(express.static('./assets'));


// set up view engine
app.set('view engine','ejs');
app.set('views','./views');


app.use('/',require('./routes'));

app.listen(process.env.PORT,function(err){
    if(err){
        console.log('Error in starting the server',err);
    }
    else{
        console.log('Server is running successfully at port number ',port);
    }
});