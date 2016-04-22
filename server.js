
var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/sendMessage', function(req, res) {
var obj = {};
var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'valeriamaleieva@gmail.com',
            pass: 'maleieva'
        }
    });
    
    var mailOptions = {
      from: 'Portfolio: '+req.body.email,
      to: 'Valerymaleeva@gmail.com',
      subject: 'Website Message',
      text: 'You have a new message with the following details...Name ' + req.body.name + ' Email ' + req.body.email + ' Message ' + req.body.message,
      html: '<p>You got a new message with the following details</p><ul><li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>'
  };

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
         res.writeHead(200, { 'Content-Type': 'application/json' }); 
         res.end(JSON.stringify(error));
      } else {
         res.writeHead(200, { 'Content-Type': 'application/json' }); 
         res.end(JSON.stringify({'result':'ok'}));
      }
  });
});

var port = Number(process.env.PORT || 3000);

app.listen(port);