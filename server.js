//importing and initializing necessary modules and routes, and listening for connections
require('dotenv').config()
const express = require('express')
const cookieSession = require('cookie-session')
const cors = require('cors')
const db = require("./models")
const dbConfig = require('./Config/db.config')
const { count } = require('./models/user.model')
const { mongoose } = require('./models')
const Role = db.role

// routes
// require('./app/routes/auth.routes')(app);
// require('./app/routes/user.routes')(app);



const app = express()

//routes


let corsOptions = {
    origin: "http://localhost:8081" //request parsing
}

app.use(cors(corsOptions))

//parse requests of content-type - application/json
app.use(express.json())

//parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}))

app.use(cookieSession({
    name: "EntertainmentWebApp-session",
    secret: "COOKIE_SECRET",
    httpOnly: true
}))




//Creating the routes
app.get("/", (req, res) => {
    res.json({message: "Welcome to Entertainment Web App"})
})

//setting port and listening for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


//------------------



// db.mongoose
//     .connect(`mongodb://localhost:27017/entertainment_db`, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Successfully connect to MongoDB.")
//         initial()
//     })
//     .catch(err => {
//         console.error("Connection error", err)
//         process.exit()
//     })

mongoose.connect(`mongodb://localhost:27017/entertainment_db`)
.then(() => {
    console.log("mongodb connected...")
}).catch(() => {
    console.log("failed to...")
})

    function initial(){
        Role.estimatedDocumentCount((err, count) => {
            if(!err && count === 0){
                new Role({
                    name: "user"
                }).save(err => {
                    if(err){
                        console.log("error", err)
                    }
                    console.log("added 'user' to roles collection")
                })

                new Role({
                    name: "moderator"
                }).save(err => {
                    if(err){
                        console.log("error", err)
                    }
                    console.log("added 'admin' to roles collection")
                })

                new Role({
                    name: "admin"
                }).save(err => {
                    if(err){
                        console.log("error", err)
                    }

                    console.log("added 'admin' to roles collection")
                })
            }
        })
    }