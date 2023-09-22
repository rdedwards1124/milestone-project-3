require('dotenv').config()
const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express()

// const defineCurrentUser = require('./src/middleware/defineCurrentUser')

// const authenticationRoutes = require("./src/authentication/routes")
const userRoutes = require('./src/users/routes')
const commentRoutes = require('./src/comments/routes')
const battleTeamRoutes = require('./src/battleTeams/routes')
const favoriteRoutes = require('./src/favorites/routes')


app.use(cors());
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.send("Hello World")
})


// app.use(defineCurrentUser)

// app.use("/authentication", authenticationRoutes)
app.use("/users", userRoutes)
app.use("/comments", commentRoutes)
app.use("/battleteams", battleTeamRoutes)
app.use("/favorites", favoriteRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})



// Just testing authentication.
/*------------------------------------*/

// const pokeusers = []

// app.get('/pokeusers', (req, res) => {
//     res.json(pokeusers)
// })

// app.post('/pokeusers', (req, res)=>{
//     const user = { username: req.body.username, password: req.body.password }
//     pokeusers.push(user)
//     res.status(201).send()
// })

/*------------------------------------*/





























// // Import necessary modules
// const express = require('express');

// // Load environment variables early
// require('dotenv').config();

// // Create an Express app
// const app = express();

// // Define routes and middleware here
// app.get('/', (req, res) => {
//   res.send('Hello from the backend!');
// });

// // Start the server
// const port = process.env.PORT
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// // To start the backend server type this in terminal: node server.js
