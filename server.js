const express= require('express') 
const dotenv = require('dotenv')

dotenv.config();//reads the dot env

const   app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{

res.json({message:'Product Api is running..'});
});

//=========================start Server
const PORT = process.env.PORT ||3000;
app.listen(PORT,()=>{

    console.log('server is running on https://localhost:${PORT}');
    
});
