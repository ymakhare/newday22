const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
const { addUser } = require("./user");
app.use(cors());

app.post("/yogesh", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "record Added" });
});

app.listen(4000, () => console.log("Server Started..."));
