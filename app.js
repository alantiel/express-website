const express = require("express");
const calculateAge = require("./calculateAge");
const path = require("path");

const app = express();

app.use(express.static('assets'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  const birthday = new Date("1988-03-27");
  const age = calculateAge(birthday);
  
  res.render("index", { age: age });
});

app.listen(port, () => console.log(`Alantiel.com listening on port ${port}!`));



