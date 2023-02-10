const router = require("express").Router();
const { addBookmark, deleteBookmark } = require("../controllers/users");
const {checkAuthenticated} = require("../middlewares");

//Bookmark Database
router.patch("/add/:title", checkAuthenticated, async (req, res) => {
  const title = req.params.title;
//   console.log("bokm", req.user);
  try {
      const response = await addBookmark(req.user.email, title);
      console.log('len', response['bookmark'].length);
      return res.status(201).send("");
  } catch (error) {
    return res.status(401).send("");
  }
});


router.delete("/delete/:title", async (req, res) => {
    const title = req.params.title;
    console.log('title', title);
    console.log("bokm", req.user);
    try {
        const response = await deleteBookmark(req.user.email, title);
        console.log('len', response['bookmark'].length);
        return res.status(201).send("");
    } catch (error) {
        console.log(error)
      return res.status(401).send("");
    }
});

module.exports = router;
