const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("client/build"));

require("./routes")(app);

app.listen(5000, function() {
  console.log("Weather app listening on port 5000");
});
