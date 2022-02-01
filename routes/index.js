const express = require("express")
const router = express.Router()
const talk = require("./talk")

router.use("/api/v1", talk)

module.exports = router