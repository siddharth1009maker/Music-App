const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
//console.log(typeof express);

const app = express(); // app represent an application
app.use(cors());
app.use(express.json());
app.use('/', require('./routes/user')); // / root or Home
app.use('/', require('./routes/music'));
//console.log('App is ', typeof app);
// app.get('/', (request, response)=>{
//     response.send("Hello Client How are U");
// });
// app.get('/login',(request, response)=>{
//     response.send('Login Page');
// })
const server = app.listen(1234, (err)=>{
    if(err){
        console.log('Error is ',err);
    }
    else{
        console.log('Server Started.... ', server.address().port);
    }
});
