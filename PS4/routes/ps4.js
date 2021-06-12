const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const request = require("request");
const config = require("../config.json");

let real_url = config["url-endpoint"] + config["token"];
let url = real_url + "37.8267,-122.4233";
// console.log(url);
router.post("/promisePost", function (req, res, next) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
});

router.post("/asyncPost", async function (req, res, next) {
  let url2 = real_url + req.body.lat + "," + req.body.long;
  console.log(url2);
  const response = await fetch(url2);
  const data = await response.json();
  console.log(console.log(data));
  res.render("results", {
    timezone: data.timezone,
    summary: data.currently.summary,
    humidity: data.currently.humidity,
    temperature: data.currently.temperature,
  });
});

router.post("/callbackPost", function (req, res) {
  request(url, function (error, response, body) {
    if (error) {
      console.error("error:", error);
    }
    const bodyJSON = JSON.parse(body);
    console.log(bodyJSON);
  });
});

router.get("/", function (req, res) {
  res.render("form_for_api");
});

module.exports = router;
