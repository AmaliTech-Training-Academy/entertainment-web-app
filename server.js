if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const fs = require('fs');
const mongoose = require("mongoose");
const LocalStrategy = require("passport-local");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
// const methodOverride = require("method-override");
// const collection = require("./models/mongodb");
const PORT = process.env.SERVER_PORT;

const authRoutes = require("./routes/auth");
const bookmarkRoutes = require("./routes/bookmark");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(flash());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);


app.use(passport.initialize());
app.use(passport.session());
// app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  console.log('req', req.user);
  res.status(201).json({ "user": req.user })
  // res.status(200).json("Index");
});

app.post("/", (req, res) => {
  console.log('req', req.user);
  res.status(201).json({ "user": req.user })
  // res.status(200).json("Index");
});


app.use("/auth", authRoutes);
app.use("/bookmark", bookmarkRoutes);



mongoose
  .connect("mongodb://127.0.0.1:27017/entertainmentDB")

  .then(() => {
    console.log("Mongodb Database Created");
    mongoose;
  })
  .catch((err) => {
    console.log("Failed to Create Database:", err);
  });

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
