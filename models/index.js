const Sequelize = require('sequelize');//pulling in sequelize library so we can use sequelize functions in this file
const db = new Sequelize('postgres://localhost:5432/wikistack');//creating a new Sequelize object and assigning it to db and the obj is connected to our db via postgres

//Sequelize will output SQL command text of each query unless you tell it to turn off
// const db = new Sequelize('postgres://localhost:5432/wikistack', {
//     logging: false
// });

//checking if connection is working
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

  const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('open', 'closed')
    }
  });

  const User = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
  });

  module.exports = { db, Page, User };
