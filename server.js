const express = require('express');
const app = express();
const port=5000;
const dotenv = require('dotenv');
dotenv.config();
require('./Config/DBConncet');
const DBConncet = require("./Config/DBConnect");

app.use(express.json());
DBConncet();


app.use("/", require("./routes/UserRoutes"));
app.use("*", (req, res) => {
  res.send("404 - PAGE NOT FOUND");
});













app.listen(5000,(err)=>
err ? console.log(err) : console.log('server is running on port 5000')
);