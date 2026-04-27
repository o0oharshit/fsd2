const express= require('express') 
const dotenv = require('dotenv')
const connectDB= require('./src/config/db')
const logger = require('./src/middleware/logger')
const errorHandeler = require('./src/middleware/errorHandeler')

dotenv.config();//reads the dot env
connectDB();
const   app= express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));

//error handeler

app.use(errorHandeler);

app.get('/',(req,res)=>{

res.json({message:'Product Api is running..'});
});

//=========================start Server
const PORT = process.env.PORT ||3000;
app.listen(PORT,()=>{

    console.log('server is running on https://localhost:${PORT}');

});
