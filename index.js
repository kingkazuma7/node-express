// console.log("こんにちは");
// console.log("さようなら");

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send({
    "name": "平岡",
    "age": "45"
  });
});

// バックエンドサーバーとブラウザをつなぐ
app.listen(5000, function() {
  console.log("Listeningonlocalhostport5000");
})
