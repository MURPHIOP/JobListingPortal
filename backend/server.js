//imports
// const express=require('express');
import express from "express";
import dotenv from 'dotenv';
import colors from 'colors';
import connectdb from "./config/db.js";

//dotenv config
dotenv.config()

//mongodb connection
connectdb();


//rest object
const app=express();

//routes
app.get('/',(req,resp)=>{
    resp.send("<h1>Welcome to Job Portal</h1>")
});

//port

const PORT=process.env.PORT || 7440

//listen
app.listen(PORT,()=>{
    console.log(`node server running ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white)
})