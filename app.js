const express = require("express");
const cors = require("cors");
const routes = require("./app/routes");

require("dotenv").config();
const port = process.env["PORT"] || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);
app.get("/", (req, res) =>
  res.status(200).json({ message: "Server berjalan..." })
);

app.listen(port, () => {
  console.log(`Server is online on port ${port}`);
});
