const mongoose = require("mongoose");

const productSizeSchema = new mongoose.Schema({
    productSize: {
        type:Object,
        
    },
    productId:{
     type:mongoose.Types.ObjectId
    },
    productStocks:{
        type:Object
    }
});

module.exports = mongoose.model("productSize", productSizeSchema);