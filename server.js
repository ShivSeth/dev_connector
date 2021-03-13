const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");

connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
