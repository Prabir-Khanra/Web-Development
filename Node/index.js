var x = require('http')
var data = require('./myModule.js')

x.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    // res.end('<h1>Ashish Sahu</h1>')
    // console.log(data.myAge())
    // console.log(data.dream)
    // res.end(data.todayDate())
    // res.write(data.todayDate())
    // res.write(' Hello Ashish ')
    res.write(req.url)
    res.end()
    // res.write(' Kolkata')
}).listen(4000)