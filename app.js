const express = require("express");
const app = express();
const cors = require("cors")
const router = require("./routes")
const PORT = process.env.PORT || 5000;

require("dotenv").config()
app.use(cors({
    origin: PORT
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(router)


app.listen(PORT, () => console.log(`Listening to ${PORT}`));