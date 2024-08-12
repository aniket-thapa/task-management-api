require("dotenv").config();
const express = require("express");
const app = express();
const sequelize = require("./config/database");
const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());

app.use("/api", taskRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synced");
    app.listen(3000, () => {
      console.log("Server is running on port: 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
