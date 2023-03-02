const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    Customer_id:{type:String},
    Customer_name:{type:String},
    Email:{
        required:true,
        type:String,
        unique:true 
    }
});

const CustomerModel = mongoose.model("Customer", CustomerSchema);
module.exports = CustomerModel;