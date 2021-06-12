const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const request = require("request");
const config = require("../config.json");

router.post("/promisePost", function (req, res, next) {
  fetch(
    "https://api.darksky.net/forecast/dc0acce184a9972f7feab226cd4ae092/37.8267,-122.4233"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
});

router.post("/asyncPost", async function (req, res, next) {
  const response = await fetch(
    "https://api.darksky.net/forecast/dc0acce184a9972f7feab226cd4ae092/37.8267,-122.4233"
  );
  const data = await response.json();
  console.log(data);
});

router.post("/callbackPost", function (req, res) {
  request(
    "https://api.darksky.net/forecast/dc0acce184a9972f7feab226cd4ae092/37.8267,-122.4233",
    function (error, response, body) {
      if (error) {
        console.error("error:", error);
      }
      const newbody = JSON.parse(body);
      console.log(body.json());
    }
  );
});

module.exports = router;
