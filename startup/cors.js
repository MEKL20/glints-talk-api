const cors = require("cors");
const PORT = process.env.PORT || 5000;

module.exports = function (app) {
  app.use(cors({
    origin: PORT
  }));
};
