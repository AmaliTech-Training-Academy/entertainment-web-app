const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { checkAuthenticated, checkNotAuthenticated } = require("../middlewares");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const { getUserByEmail, addUser } = require("../controllers/users");

const baseRoute = "/auth";

async function verify(email, password, done) {
  // console.log(users);

  const user = await getUserByEmail(email);
  console.log(`user: ${user}`);

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

passport.serializeUser((user, done) => {
    console.log("\n\n\nser", user);
    delete user.password;
    return done(null, user);
});
passport.deserializeUser((user, done) => {
  console.log(user);
  return done(null, user);
});

passport.use(new LocalStrategy({ usernameField: "email" }, verify));

// GET /auth/login
router.get("/", checkAuthenticated, (req, res, next) => {
  // res.render("index.ejs", { name: req.user.name });
  res.status(200).json({ message: "Home Page" });
});

router.post(
  `/login`,
  checkNotAuthenticated,
  passport.authenticate("local", {
    // session: false,
    // successMessage: true,
  }),
  async (req, res) => {
    if (req.user) {
    //   res.redirect("/");
        console.log('req.user', req.user);
        return res.status(201).json({ user: req.user });
    }
    res.status(401).json("No auth");
    // if (req.user.isAdmin === false) {
    // res.redirect('/dashboard/received');
    // }
  }
);

//   res.status(200).json({ message: "Login" });
// );
/*
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
*/

router.post("/signup", checkNotAuthenticated, async (req, res) => {
  const { email, password, confirm_password } = req.body;
  try {
    if (password === confirm_password) {
      console.log("Register");
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);

      const respond = await addUser(email, hashedPassword);

      console.log("res", respond);
      res.json("Success");
      //   res.redirect(`${baseRoute}/login`);
    } else {
      res.send("Unmatched Password");
    }
  } catch (err) {
    console.log(err);
    res.redirect(`${baseRoute}/signup`);
    // res.status(200).json({ message: "signup" });
  }
});

router.post('/logout', function(req, res, next){

    delete req.user
    console.log(req.user)
    return res.status(200).json("ksjf");

  });
  
  module.exports = router;