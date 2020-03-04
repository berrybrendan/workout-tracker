const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://brendan:123abc@ds211265.mlab.com:11265/heroku_t9hbcr7s", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
require("./routes/routes-api.js")(app);
require("./routes/routes-html.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});