const mongoose = require("mongoose");
const mongodb = require("mongodb");
const express = require("express");
const app = express();
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/api_web_tech_assignment", ()=>
console.log("Connected to Database"));

const product = require("./routes/Product")
app.use(product);

const order = require("./routes/Order")
app.use(order);

const customer = require("./routes/Customer")
app.use(customer);

app.listen(3005, ()=>{
    console.log("Server is set up at Port no", 3005)
});