require('dotenv').config();
const {dbConnection}=require('./database/config');

let port=process.env.port || 3000;

const express=require('express');

const app=express();

app.use(express.json());

dbConnection();

app.use('/product',[],(req,res)=>{
    res.send('hello world');
})

app.listen(port,()=>{
    console.log(`running on port ${port}`);
})