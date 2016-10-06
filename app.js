var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip(path.join(__dirname,'app')));
app.use('/bower_components', express.static(__dirname +'/bower_components'));
app.use(express.static("" + __dirname + '/.tmp'));
app.listen(process.env.PORT || 5000);
// app.use(express.static("" + __dirname + '/app'));
// app.use(express.static("" + __dirname + '/.tmp'));

    


