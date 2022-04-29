// console.log("こんにちは");
// console.log("さようなら");

const express = require("express");
const app = express();
// const coronaData = require("./coronaData.json");
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function (req, res) {
  console.log("reqの中身", req.body);
});

// バックエンドサーバーとブラウザをつなぐ
app.listen(5000, function() {
  console.log("Listeningonlocalhostport5000");
})
