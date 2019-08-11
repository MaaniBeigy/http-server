var http = require('http');
var fs = require("fs");

// create htt-server
http.createServer(function (req, res) {
    fs.readFile("./filed.txt", function(err, data) {
        if(err) {
            res.writeHead(500);
            res.end(`Sorry : ${err.message}`);
            console.log('ddd');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }

        // if (err) throw err;
        // if (err) {
        //     res.writeHead(500);
        //     res.end();
        // }
        // 
        // if (err) throw err;

        // console.log(buf.toString());
        // if (err) {
        //     err.writeHead(500, {'Content-Type': 'text/html'});
        //     err.end('Sorryyy');
        // };
    });

}).listen(3000); 



// console.log('am i served?');