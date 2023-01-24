const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const passport = require("passport");
/*
function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);
    console.log(`user: ${user}`);
    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
}

*/
const users = require('./users');

function configurePassport() {
  const authenticateUser = async (email, password, done) => {
    console.log('login');
    const getUserByEmail = (email) =>
      users.find((user) => user.email === email);

    const user = getUserByEmail(email);
    console.log(`user: ${user}`);
    if (user === null) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  // (email) => users.find((user) => user.email === email),
  const getUserById = (id) => users.find((user) => user.id === id);

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
}

module.exports = {
  // initialize,
  configurePassport,
  users
};
