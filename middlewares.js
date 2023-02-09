
function checkAuthenticated(req, res, next) {
    console.log(`req auth: ${req.isAuthenticated()}`);
    if (req.isAuthenticated()) {
        console.log('is auth');
        return next();
    }
    console.log('no auth');
    res.json("Auth")
    // res.redirect("/auth/login");
}
  
function checkNotAuthenticated(req, res, next) {
    console.log("body:", req.body);
    if (req.isAuthenticated()) {
        console.log("Auth");
        return res.redirect("/");
        // res.json("Is authenticated")
    }
    console.log("Not Auth");
    next();
}

module.exports = {
    checkAuthenticated,
    checkNotAuthenticated
}