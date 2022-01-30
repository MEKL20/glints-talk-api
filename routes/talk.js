const express = require("express")
const router = express.Router()
const { sendMail } = require("../controllers/sendMail")

router.post("/talk", sendMail)

module.exports = router