const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello this is from admasu endpoint" });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/Syntecxhub")
  .then(() => {
    console.log("connected to mongodb");
    app.listen(3000, () => {
      console.log("server is running on port 3000........");
    });
  })
  .catch(() => {
    console.error("Error while connecting to db");
  });
