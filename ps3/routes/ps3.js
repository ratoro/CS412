const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');



const urlencodedParser = bodyParser.urlencoded({extended:false});
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("template", { title: "Hey now" });
});

router.post("/", urlencodedParser,function (req,res){
  res.render("template2", { myString: req.body.customstring, length: req.body.customlength });
});

router.get("/:name", function(req,res){
  res.render("template", {title: req.params.name})
});

// router.get("/post",urlencodedParser, function(req,res){

// });



module.exports = router;
