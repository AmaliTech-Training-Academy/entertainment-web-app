require("dotenv").config();
const express = require("express");
const app = express(); //Initializing the express

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "This is rest api working",
  });
});

//listening port and callback function
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});
