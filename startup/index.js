module.exports = (app) => {
  require("./config");
  require("./cors")(app);
  require("./parser")(app);
  require("./routes");
};
