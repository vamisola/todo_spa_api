const express = require('express');
      app = express();
var PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todos');

//allow access the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


app.get('/', (req, res) => {
  res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log('process is running on PORT', PORT);
});
