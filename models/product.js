const {Schema,model}=require('mongoose');

const product =Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})

const Product=model('product',product);

module.exports={
    Product
}