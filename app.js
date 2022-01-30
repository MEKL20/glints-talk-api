require("dotenv").config()
const express = require("express")
const { sendMail } = require("./controllers/sendMail")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

// app.get("/", (req, res) => {
//     res.send("Hello")
// })

app.post("/api/v1/talk", sendMail)

app.listen(port, console.log("localhost:" + port))