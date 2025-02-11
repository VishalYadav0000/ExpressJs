const express = require("express");
const route = require("./routes")
 const app =express()

 app.use((req,res,next)=>{
    console.log("in the middleware")
    next();
 })
 app.use(route)

 app.listen(3000,()=>{
    console.log("server listen at 3000")
 })