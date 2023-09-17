require('dotenv').config()
const express = require('express')
const cors = require("cors");
const userRoutes = require('./src/users/routes')
const commentRoutes = require('./src/comments/routes')
const app = express()
const bcrypt = require('bcrypt')

app.use(cors());

app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello World")
})

// Just testing authentication.
/*------------------------------------*/

const pokeusers = []

app.get('/pokeusers', (req, res) => {
    res.json(pokeusers)
})

app.post('/pokeusers', (req, res)=>{
    const user = { username: req.body.username, password: req.body.password }
    pokeusers.push(user)
    res.status(201).send()
})

/*------------------------------------*/


app.use("/users", userRoutes)
app.use("/comments", commentRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})

































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
