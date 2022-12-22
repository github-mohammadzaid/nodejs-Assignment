const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = new mongoose.Schema({
    productid : {
        type : String,
        required : true,
        minlength : 3,
        unique : true

    },

    productname : {
        type : String,
        required : true,
        minlength : 3

    },

    categoryid : {
        type : String,
        required : true,
        minlength : 3,
        unique : true

    },

    categoryname : {
        type : String,
        required : true,
        minlength : 3

    },
        
})


const product = mongoose.model('product', productSchema);
module.exports = product;
