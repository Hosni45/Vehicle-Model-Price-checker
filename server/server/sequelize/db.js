
const { Sequelize, DataTypes } = require("sequelize");



const User = require("./userModel");
const History = require("./historyModel");


 
const connection = new Sequelize(
  "carcheckdb",
   "root",
    "root",
     {
  host: "localhost",
  dialect: "mysql",
});
const database ={}
database.sequelize = Sequelize;
database.Sequelize = Sequelize;

database.User=require('./userModel')(sequelize,DataTypes)
database.History=require('./historyModel')(sequelize,DataTypes)
database.User.HasOne(database.History ,{foreignKey:"userId"})


database.sequelize.sync()

connection.authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.error("Cannot connect to the database:", error.message);
    console.error("Error details:", error);
  });

module.exports = {database};

















// this call, Sequelize will automatically perform an SQL query to the database and create a table, printing the message phrase table created successfully!.
// please run this below *****one time***** after creating your connection



// export your Model Phrase below

