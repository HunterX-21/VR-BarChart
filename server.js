const express = require("express");
const path = require("path");

const app =express();

app.get("/*",(req,res)=>{
    res.sendFile(path.resolve("./", "vr.html"))
});

app.listen(process.env.PORT || 5000, () => console.log("Server is running..."))


// const http = require('http');
// const fs = require('fs');

// const PORT=5000;

// fs.readFile('./vr.html', function (err, html) {

//     if (err) throw err;

//     http.createServer(function(request, response) {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     }).listen(PORT,() => console.log('Server running on 5000...'));
