
function checkAuthenticated(req, res, next) {
    console.log(`req auth: ${req.isAuthenticated()}`);
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

module.exports = {
    checkAuthenticated,
    checkNotAuthenticated
}