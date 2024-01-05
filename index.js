// index.js
import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/test", (req, res) => {
  res.send("test");
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
