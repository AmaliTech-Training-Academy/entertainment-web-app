const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { checkAuthenticated, checkNotAuthenticated } = require("../middlewares");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const { getUserByEmail, addUser } = require('../controllers/users')

passport.use(new LocalStrategy({ usernameField: "email" }, verify));

// GET /auth/login
router.get("/", checkAuthenticated, (req, res, next) => {
  // res.render("index.ejs", { name: req.user.name });
  res.status(200).json({ message: "Home Page" });
});

router.post("/login", checkNotAuthenticated, (req, res) => {
  // res.render("login.ejs");
  res.status(200).json({ message: "Login" });
});

router.post("/login", async (req, res) => {
  try {
    const user = getUserByEmail(req.body.email);

    if (await bcrypt.compare(req.body.password, user.password)) {
      res.status(200).send({ message: "Login" });
    } else {
      res.status(400).send("wrong password");
    }
  } catch {
    res.send("wrong details");
  }
});

router.post("/signup", checkNotAuthenticated, async (req, res) => {
  try {
      if (req.body.password === req.body.confirm_password) {
        console.log("Register");
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        console.log(hashedPassword)
        const res = addUser(email, password);
        
        console.log('res', res);
    //   users.push({
    //     id: Date.now().toString(),
    //     email: req.body.email,
    //     password: hashedPassword,
    //   });
    //   await collection.insertMany([users]);
      res.redirect("/login");
    } else {
      res.send("Unmatched Password");
    }
  } catch {
    res.redirect("/signup");
    // res.status(200).json({ message: "signup" });
  }
});

router.post("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
  // res.redirect("/login");
});

// const getUserByEmail = (email) => users.find((user) => user.email === email);

async function verify(email, password, done) {
  console.log("login: ", email);
  // console.log(users);

  const user = await getUserByEmail(email);
  console.log(`user: ${user.email}`);

  if (user === null) {
    return done(null, false, { message: "No user with that email" });
  }

  try {
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log("pass success");

      done(null, user);
    } else {
      done(null, false, { message: "Password or email incorrect" });
    }
  } catch (e) {
    return done(e);
  }
}

// (email) => users.find((user) => user.email === email),
const getUserById = (id) => users.find((user) => user.id === id);

passport.serializeUser((user, done) => {
  console.log(user);

  return done(null, user.id);
});
passport.deserializeUser((id, done) => {
  console.log(id);

  return done(null, getUserById(id));
});

/*
  router.post(
    "/login",
    checkNotAuthenticated,
    passport.authenticate("local", {
      session: false,
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true,
    })
  );
  */

module.exports = router;
