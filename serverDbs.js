/**
 * Created by wyx on 2016/4/18.
 */

var http  = require('http');
var work  = require('./serverdb');
var mysql = require('mysql');

var db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'wyx'
});


var server = http.createServer(function(req,res){

    res.setHeader('content-Type','text/html');

    switch (req.method){
        case 'GET' :
            switch (req.url){
                case '/' :
                    work.show(db,res);
                    break;
                case '/add' :
                    work.add(db,req,res);
                    break;
                case '/update' :
                    work.update(db,req,res);
                    break;
                case '/delete' :
                    work.delete(db,req,res);
                    break;
            }
            break;
    }
});

server.listen(3333,'127.0.0.1');
