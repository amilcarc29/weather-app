const router = require("express").Router();
const path = require("path");
const fetch = require("node-fetch");

const apiKey = "2e53218b7e31aa63d6596df481834fab";

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = app => {
  let city;
  app.post("/search-location", (req, res) => {
    city = req.body.city;
    res.redirect("/");
  });

  app.get("/search-location-weather", (req, res) => {
    if (city) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
        .then(res => res.json())
        .then(data => res.send({ data }))
        .catch(err => {
          res.redirect("/error");
        });
      city = "";
    }
  });
};
