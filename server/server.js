const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

let letter = { text: "", image: "" };

// API lưu thư
app.post("/save", (req, res) => {
  letter = req.body;
  res.json({ status: "ok" });
});

// API lấy thư
app.get("/get", (req, res) => {
  res.json(letter);
});

// chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
