require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParcer = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();


const authenticationRoutes = require("./src/authentication/routes");
const userRoutes = require("./src/users/routes");
const commentRoutes = require("./src/comments/routes");
const battleTeamRoutes = require("./src/battleTeams/routes");
const favoriteRoutes = require("./src/favorites/routes");

app.use(express.json());

app.use(cors({ 
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}));

app.use(cookieParcer());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("Hello World");
});


app.use("/authentication", authenticationRoutes);
app.use("/users", userRoutes);
app.use("/comments", commentRoutes);
app.use("/battleteams", battleTeamRoutes);
app.use("/favorites", favoriteRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
});


