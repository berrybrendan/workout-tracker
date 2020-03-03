const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://brendan:123abc@ds211265.mlab.com:11265/heroku_t9hbcr7s", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/routes-api.js"));
app.use(require("./routes/routes-view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});