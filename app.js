const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.post("/add",(req,res)=>{
    res.send("welcome to add page")
})

app.post("/view",(req,res)=>{
    res.send("welcome to view page")
})

app.listen(8080,()=>{
    console.log("server started")
})