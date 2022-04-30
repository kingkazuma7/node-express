// console.log("こんにちは");
// console.log("さようなら");

const fs = require('fs');
const express = require("express");
const app = express();
// const coronaData = require("./coronaData.json");
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function (req, res) {
  fs.writeFile(__dirname + "/data.txt", req.body.activity, function() {
    res.send("投稿完了");
  });
});

// バックエンドサーバーとブラウザをつなぐ
app.listen(5000, function() {
  console.log("Listeningonlocalhostport5000");
})
