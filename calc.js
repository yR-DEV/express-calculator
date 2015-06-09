var express = require("express");
var calc = express();

calc.get("/:operation/:firstNum/:secondNum", function(req, res){
  var calculate = 0;
  if(req.params.operation === 'add'){
    res.send("<h1>The sum is: " + (Number(req.params.firstNum) + Number(req.params.secondNum)) + "</h1>");
  } else if(req.params.operation === 'sub'){
    res.send("The difference is: " + (Number(req.params.firstNum) - Number(req.params.secondNum)));
  } else if(req.params.operation === 'mult'){
    res.send("The difference is: " + (Number(req.params.firstNum) * Number(req.params.secondNum)));
  } else if(req.params.operation === 'div'){
    res.send("The difference is: " + (Number(req.params.firstNum) / Number(req.params.secondNum)));
  } else{
    res.send("BRUH");
  }
})

var server = calc.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
