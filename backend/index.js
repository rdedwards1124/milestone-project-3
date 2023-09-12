require('dotenv').config()
const express = require('express')
const app = express()

// app.get("/", (req,res) => {
//     res.send("Hello World")
// })

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
