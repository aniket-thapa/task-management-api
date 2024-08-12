const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  dueDate: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.ENUM("Pending", "In Progress", "Completed"),
    defaultValue: "Pending",
  },
  priority: {
    type: DataTypes.ENUM("Low", "Medium", "High"),
    defaultValue: "Medium",
  },
});

module.exports = Task;
