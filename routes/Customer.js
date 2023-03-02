const mongoose = require("mongoose");
const mongodb = require("mongodb");
const express = require("express");
const router = express.Router();
const Customer =require("../models/Customer");
const { json } = require("body-parser");

router.post("/createCustomer", async(req,res)=>{
    try{
        let customers = await Customer.create({...req.body});
        res.json(customers)
    }
    catch(err){
        console.log({err});
    }
    
})

router.get("/customerDetails", async(req,res)=>{
    try{
        let customers = await Customer.find();
        res.json(customers)
    }
    catch(err){
        console.log({err});
    }
    
})



module.exports = router;