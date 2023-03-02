const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    Customer_id:{type:String},
    Inventory_id:{type:String},
    Item_name:{type:String},
    Quantity:{type:Number},
    
});

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;