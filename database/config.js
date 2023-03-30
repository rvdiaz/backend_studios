const mongoose=require('mongoose');
const { Product } = require('../models/product');

const dbConnection=async()=>{
    try {
        await mongoose.connect(process.env.url_database,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log('connected succesfull with database');
    } catch (error) {
        console.log(error);
    }
}

module.exports={dbConnection};