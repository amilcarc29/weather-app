const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("client/build"));
app.use(routes);

app.listen(5000, function() {
  console.log("Weather app listening on port 5000");
});
