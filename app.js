const express = require("express")
const app = express()
require("./startup")(app);

const port = process.env.PORT || 3000

app.listen(port, console.log("localhost:" + port))