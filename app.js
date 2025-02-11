const express = require("express");
const http = require("http");
const route = require("./routes")
 const app =express()

 app.use((req,res,next)=>{
    console.log("in the middleware")
    next();
 })
 app.use(route)

 const server = http.createServer(app);
 server.listen(3000,()=>{
    console.log("server listen at 3000")
 })