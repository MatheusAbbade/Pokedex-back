const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));


  app.use(cors());

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // MIDDLEWARES
  app.use(bodyParser.json());
  require('../api/routes/login')(app);
  require('../api/routes/pokemons')(app);


  return app;
};

