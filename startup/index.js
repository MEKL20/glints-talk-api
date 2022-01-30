module.exports = function (app) {
    require("./cors")(app)
    require("./parser")(app);
  };
  