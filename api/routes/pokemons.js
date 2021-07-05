module.exports = app => {
    const controller = require('../controllers/pokemons')();
    const jwt = require('../../JWT/index');
  
    app.route('/api/v1/pokemons/:offset/:limit')
      .get(jwt.verifyJWT,controller.pokemons);

      app.route('/api/v1/pokemon/:name/')
      .get(jwt.verifyJWT,controller.getPokemonByName);

      app.route('/api/v2/ability/:name')
      .get(jwt.verifyJWT,controller.getPokemonAbilities);
  }