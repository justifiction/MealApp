const express = require("express");
const userRoutes = require("./userRoutes");
const cors = require("cors");
const app = express();

require("./db");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);

const port = 8080;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
