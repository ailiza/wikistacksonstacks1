const express = require("express");
const morgan = require("morgan");
const app = express();//calls express function
const { db, Page, User } = require('./models'); //pulling db only from index.js


//logging middleware
app.use(morgan('dev'));


//static middleware - this serves up static files from a public folder without having to do
//an app.get for each individual file
// app.use(express.static(__dirname + "/"));
app.use(express.static(__dirname + "/public"));

//body parsing middleware
// app.use(express.urlencoded({extended:false})); //comment out because it'll default to true
app.use(express.urlencoded({extended:true}));

//send a simple hello world
app.get('/', (req,res,next) => res.send('hello world'));

// User.sync({ force: true }).then(() => {
//   // Now the `users` table in the database corresponds to the model definition
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

//.sync is built in synchonization functionality that will run queries against db and create the tables and columns if it doesn't exist
//changes our Sequelize models into SQL tables
const PORT = 3000;

const init = async () => {
  // await Page.sync();
  // await User.sync()

  //Sequelize gives us a method on the db so we can run it on db instead of each individual model (Page,User)
  await db.sync({force:true});
  //force: true drops all tables and then recreates then, good for testing, bad for production

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`)
  });
}

init();


