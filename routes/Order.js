const mongoose = require("mongoose");
const mongodb = require("mongodb");
const express = require("express");
const router = express.Router();
const Order =require("../models/Order");
const Customer = require("../models/Customer")
const Product = require("../models/Product")

router.post("/createOrders", async(req,res)=>{
    try{

        let customer = await Customer.findOne({Customer_id:req.body.Customer_id});
        let product = await Product.findOne({Inventory_id:req.body.Inventory_id});
        
        if(req.body.Quantity>product.Available_quantity){
            return res.json({message:"ITEM OUT OF Stock"});
        }
        
       
        product.Available_quantity = (product.Available_quantity - req.body.Quantity);
        await product.save();

        let orders = await Order.create({...req.body});
        res.json(orders)
    }
    catch(err){
        console.log({err});
    }
    
});



router.get("/orders", async(req,res)=>{
    try{
        let order = await Order.find()
        res.json(order)
    }
    catch(err){
        console.log({err});
    }
})


// router.get("/orders/:orderID", async(req,res)=>{
//     try{
//         let order = await Order.find()
//         res.json(order)
//     }
//     catch(err){
//         console.log({err});
//     }
// })



module.exports = router;