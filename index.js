const express = require("express");
const path = require("path");

const connectDB = require("./config/db");
const userRoute = require("./routes/user.route");
const imageRoute = require("./routes/image.route");

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// routes
app.use("/api/users", userRoute);
app.use("/api/images", imageRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello, this is from Admasu endpoint" });
});

// error handler
app.use((err, req, res, next) => {
  res.status(400).json({ message: err.message });
});

// Connect DB and start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
