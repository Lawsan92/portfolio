const express = require("express");
const router = express.Router();
const pushEmail = require("../controllers/pushEmail.js");

//--------------------MIDDLEWARE--------------------*/
router.use((req, res, next) => {
  req.method === "POST" && console.log("-POST /visits", "@", new Date());
  next();
});

//--------------------ROUTES--------------------*/
router.route("/").post((req, res) => {
  console.log(`Email route hit`);
  pushEmail();
  res.send("Email Sent");
});
module.exports = router;
