const fs = require('fs');
const express = require("express");
const activities = require("./activities.json");
const app = express();
// const coronaData = require("./coronaData.json");
app.use(express.urlencoded({ extended: true }));

/* ----- index読み込み ----- */
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

/* ----- autumnファイル書き込み（投稿） ----- */
app.post("/autumn", function (req, res) {
  fs.writeFile(__dirname + "/data.txt", req.body.activity, function() {
    res.send("投稿完了");
  });
});

/* ----- データの変更 ----- */
app.post("/update", function (req, res) {
  activities[0].activity = req.body.updateActivity;
  res.send(activities);
});

/* ----- データの削除 ----- */
app.post("/delete", function (req, res) {
  activities.splice(req.body.number, 1);
  res.send(activities);
})

/* ----- バックエンドサーバーとブラウザをつなぐ ----- */
app.listen(5000, function() {
  console.log("Listeningonlocalhostport5000");
})
