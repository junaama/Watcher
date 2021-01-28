require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const userController = require("./controllers/userController");
const taskController = require("./controllers/taskController");
const archiveController = require("./controllers/archiveController");
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(bodyParser.json());


// Routes
app.use("/api/users", userController);
app.use("/api/tasks", taskController);
app.use("/api/archive", archiveController)
app.set("port", process.env.PORT || 3000)
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${PORT} 🌟`);
});
