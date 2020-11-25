var cors = require("cors");
var express = require("express");
var app = express();


app.use(express.static('./dist/api-workshop-frontend'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/api-workshop-frontend'}
  );
  });
  
app.use(cors());

app.listen(process.env.PORT || 8080);