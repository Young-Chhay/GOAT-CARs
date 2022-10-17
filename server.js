const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers');


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ 
  // helpers
});

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

<<<<<<< HEAD

=======
const hbs = exphbs.create({
  helpers
});
>>>>>>> e9dd8f51ecba3d4245da084358d52798f0b8e0c9

// hbs.getPartials().then(function (partials) {
//   console.log(partials);
// })
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, 'public')));
app.use("/forum", express.static(path.join(__dirname, 'public')));
app.use("/merchandise", express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
<<<<<<< HEAD
  app.listen(PORT, () => console.log('Now listening'));
=======

  app.listen(PORT, () => console.log('Now listening at localhost:3001'));
>>>>>>> e9dd8f51ecba3d4245da084358d52798f0b8e0c9
});
