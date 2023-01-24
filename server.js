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

const { configurePassport } = require("./passport-config");

const users = require("./users");

/*
const initializePassport = require("./passport-config");
const users = [
  {
    name: "emma@gmail.com",
    password: "$2b$10$bhBcU68D.8vPkRuhGxVBWu0Yhtcm1LeHB/9rwctHs0S5ILL4bkDOi",
  },
  {

  }
];

initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);
*/
// configurePassport();

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

app.set("view-engine", "ejs");
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
  res.render("index.ejs", { name: req.user.name });
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
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

app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register.ejs");
});

app.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    console.log("Register");
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(users);
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
});

app.post("/logout", (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
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
    console.log("Auth");
    return res.redirect("/");
  }
  console.log("Not Auth");
  next();
}

app.listen(8080);
