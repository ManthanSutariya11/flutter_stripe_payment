const express = require("express");
const env = require('dotenv');
var cookieParser = require('cookie-parser')


const app = express();
app.use(cookieParser())
env.config({ path: "./config.env" });

const PORT = process.env.PORT;

app.use(express.json());
app.use(require("./router/route"));

app.listen(PORT, () => {
    console.log("Server running");
});


