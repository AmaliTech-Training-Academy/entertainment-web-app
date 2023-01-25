if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const collection = require("./database/mongodb");

const PORT = process.env.SERVER_PORT;

const { configurePassport } = require("./passport-config");

const users = require("./users");

async function verify(email, password, done) {
  console.log("login: ", email);
  console.log(users);
  const getUserByEmail = (email) => users.find((user) => user.email === email);

  const user = getUserByEmail(email);
  console.log(`user: ${user}`);
  if (user === null) {
    return done(null, false, { message: "No user with that email" });
  }

  try {
    if (user && (await bcrypt.compare(password, user.password))) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Password or email incorrect" });
    }
  } catch (e) {
    return done(e);
  }
}

// (email) => users.find((user) => user.email === email),
const getUserById = (id) => users.find((user) => user.id === id);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  return done(null, getUserById(id));
});

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
passport.use(new LocalStrategy({ usernameField: "email" }, verify));
app.use(passport.initialize());
app.use(passport.session());
// app.use(methodOverride("_method"));

app.get("/", checkAuthenticated, (req, res) => {
  // res.render("index.ejs", { name: req.user.name });
  res.status(200).json({message: 'Home Page'})
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  // res.render("login.ejs");
  res.status(200).json({message: "Login"})
});

app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);


app.post("/signup", checkNotAuthenticated, async (req, res) => {
  try {
    // console.log("Register");
    if (req.body.password === req.body.conpassword) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      users.push({
        id: Date.now().toString(),
        email: req.body.email,
        password: hashedPassword,
      });
      await collection.insertMany([users]);
      // console.log(users);
      res.redirect("/login");
    } else {
      res.send("Unmatched Password");
    }
  } catch {
    res.redirect("/signup");
    res.status(200).json({message: "signup"})
  }
});

app.post("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
  // res.redirect("/login");
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  console.log("body:", req.body);
  if (req.isAuthenticated()) {
    // console.log("Auth");
    return res.redirect("/");
  }
  // console.log("Not Auth");
  next();
}

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
