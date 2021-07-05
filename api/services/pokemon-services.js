"use strict";

const axios = require("axios");
const config     = require('config');

exports.getPokemon  = async (offset, limit) => {
    try {

      const { data, status } =  await axios.default.get(
        `${config.get('pokemonAPI.uri')}pokemon?offset=${offset}&limit=${limit}`
      );
  
      if (status === 200) 
        return data;
  
      return null;
    } catch (error) {
      console.error(error);
    }
  };
  
  exports.getPokemonByName  = async (name) => {
    try {

      const { data, status } =  await axios.default.get(
        `${config.get('pokemonAPI.uri')}pokemon/${String(name).toLowerCase()}/`
      );
  
      if (status === 200) 
        return data;
  
      return null;
    } catch (error) {
      console.error(error);
    }
  };

  exports.getPokemonAbilities  = async (ability) => {
    try {

      const { data, status } =  await axios.default.get(
        `${config.get('pokemonAPI.uri')}pokemon/${String(ability).toLowerCase()}/`
      );
  
      if (status === 200) 
        return data;
  
      return null;
    } catch (error) {
      console.error(error);
    }
  };
  