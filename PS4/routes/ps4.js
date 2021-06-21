const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
const request = require("request");
const config = require("../config.json");
const redis = require("redis");

const client = redis.createClient();

client.on("error", function (error) {
  console.error(error);
});

client.set("key", "value", redis.print);
client.get("key", redis.print);

let real_url = config["url-endpoint"] + config["token"];
let url = real_url + "37.8267,-122.4233";
// console.log(url);
// router.post("/promisePost", function (req, res, next) {

router.post("/promisePost", (req, res, err) => {
  //     fetch(url)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       res.render("results", {
  //         timezone: data.timezone,
  //         summary: data.currently.summary,
  //         humidity: data.currently.humidity,
  //         temperature: data.currently.temperature,
  //       });
  //     });
  // });
  console.log("testing");
  const url2 = real_url + req.body.lat + "," + req.body.long;
  const cachedReqKey = req.body.lat + "." + req.body.lon;
  client.get(cachedReqKey, (err, result) => {
    if (result) {
      //res.render('ps4apidisplay', {myApiData: result, fromCache: true})
      res.json({
        timezone: data.timezone,
        summary: data.currently.summary,
        humidity: data.currently.humidity,
        temperature: data.currently.temperature,
      });
    } else {
      fetch(url2)
        .then((resp) => resp.json())
        .then((body) => {
          client.set(cachedReqKey, JSON.stringify(body));
          client.expire(cachedReqKey, 15);
          //res.render('ps4apidisplay', {myApiData: JSON.stringify(body), fromCache:"false"})
          res.json({
            timezone: body.timezone,
            summary: body.currently.summary,
            humidity: body.currently.humidity,
            temperature: body.currently.temperature,
          });
        });
    }
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
    const data = JSON.parse(body);
    console.log(data.timezone);
    res.render("results", {
      timezone: data.timezone,
      summary: data.currently.summary,
      humidity: data.currently.humidity,
      temperature: data.currently.temperature,
    });
  });
});

router.get("/", function (req, res) {
  res.render("form_for_api");
});

module.exports = router;
