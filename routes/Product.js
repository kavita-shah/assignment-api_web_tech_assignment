const mongoose = require("mongoose");
const mongodb = require("mongodb");
const express = require("express");
const router = express.Router();
const Product =require("../models/Product");

router.post("/createInventory", async(req,res)=>{
    try{
        let product = await Product.create({...req.body});
        // console.log(product);
        res.json(product)
    }
    catch(err){
        console.log({err});
    }
    
})





router.get("/inventory/:inventoryType", async(req,res)=>{
    try{
        let product = await Product.find({inventory_type:req.params.inventoryType});
        // console.log(product);
        res.json(product)
    }
    catch(err){
        console.log(err.message);
    }
})



router.get("/inventory", async(req,res)=>{
    try{
        let product = await Product.find();
        // console.log(product);
        res.json(product)
    }
    catch(err){
        console.log({err});
    }
    
})

router.put("/itemName/:inventoryId/:availableQuantity", async(req,res)=>{
    try{
        let customer = await Customer.findOne({Inventory_id:req.params.inventoryId});
        let updateQuantity= await Customer.updateOne({Email:req.params.email},{$set:{Available_quantity:customer.Available_quantity-req.params.availableQuantity}})
        console.log(updateQuantity);
        res.json(updateQuantity)
    }
    catch(err){
        console.log(err.message);
    }

})
module.exports = router;