const express = require("express");
const cors = require("cors");
const { connectDb, Details } = require("./models/details");

const app = express();
app.use(cors());
app.use(express.json());
connectDb();

app.post("/upload", (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("server");
});
