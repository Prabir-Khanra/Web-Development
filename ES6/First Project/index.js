var express = require('express')
var app = express()

app.get("/",(req,res) => {
    return res.send("Hey Champions.")
})
app.get("/product-info",(req,res) => {
    return res.send("<h1>Hello World</h1>")
})

app.listen(5000,function () {
    console.log(`Your server is running.`)
})