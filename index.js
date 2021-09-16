const express = require("express");
const path = require("path");

const port = 3000 || process.env.PORT

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/index", (req, res) => {
    res.send('This is the homepage');
})

app.listen(port, () => {
    console.log("server is running on port 3000");
})