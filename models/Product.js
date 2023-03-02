const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    Inventory_id:String,
    Inventory_type:String,
    Item_name:String,
    Available_quantity:Number
});

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;