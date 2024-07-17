
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
      userid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true ,
          allowNull: false
        },
        phoneNumber: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        }, 
  });

  return User;
};