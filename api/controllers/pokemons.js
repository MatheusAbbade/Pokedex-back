module.exports = () => {
    const pokemonService = require('../services/pokemon-services')
    const controller = {};
  
    controller.pokemons = async (req, res) => {
        let {offset, limit} = req.params;
        const pokemons = await pokemonService.getPokemon(offset, limit)
       // console.log(pokemons)
        
        res.status(200).json(pokemons);
    }

    controller.getPokemonAbilities = async (req, res) => {
        let {name} = req.params;
        console.log('------------------------------------------------------')
        console.log(abilities)
        const pokemon = await pokemonService.getPokemonAbilities(name)
       // console.log(pokemon)
        
        if(abilities)
         res.status(200).json(abilities);
        else
         res.status(404).json(null);

    }


    controller.getPokemonByName = async (req, res) => {
        let {name} = req.params;
        console.log('------------------------------------------------------')
        console.log(name)
        const pokemon = await pokemonService.getPokemonByName(name)
       // console.log(pokemon)
        
        if(pokemon)
         res.status(200).json(pokemon);
        else
         res.status(404).json(null);

    }
  
  
  
    return controller;
  }

  