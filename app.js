require("dotenv").config()
require("./startup")(app);
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const { sendMail } = require("./controllers/sendMail")

// app.get("/", (req, res) => {
//     res.send("Hello")
// })

app.post("/api/v1/talk", sendMail)

app.listen(port, console.log("localhost:" + port))