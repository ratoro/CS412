const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const request = require("request");
const config = require("../config.json");

let url = config["url-endpoint"];
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
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
});

router.post("/callbackPost", function (req, res) {
  request(url, function (error, response, body) {
    if (error) {
      console.error("error:", error);
    }
    const newbody = JSON.parse(body);
    console.log(body.json());
  });
});

module.exports = router;
