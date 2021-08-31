// DB Connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL,{useNewUrlParser : true , useUnifiedTopology : true ,  useCreateIndex: true },
//mongoose.connect('mongodb+srv://brainmentors:123456789brain@cluster0.elcns.mongodb.net/musicdb?retryWrites=true&w=majority',
{poolSize:5}, (err=>{
    if(err){
        console.log('Problem in DB Connection');
    }
    else{
        console.log('DB Connection Created....');
    }
}));
module.exports = mongoose;