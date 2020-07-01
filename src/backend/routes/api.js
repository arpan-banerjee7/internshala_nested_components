const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  res.send("From API route");
});

function writetoFile(content) {
  fs.writeFile("test.txt", content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

router.post("/fileData", (req, res) => {
  console.log("backedn post");
  console.log(req.body);
  writetoFile(JSON.stringify(req.body));
});

module.exports = router;
