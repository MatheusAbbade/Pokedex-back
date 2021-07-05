"use strict";
module.exports = () => {
    const usersDB = require('../data/users-db.json');
    const config = require('config');
    const jwt = require('jsonwebtoken');

    const controller = {};
  
    controller.login = (req, res) => { 

        console.log(req)
        let {usuario, senha} = req.body;
        

        var user =  usersDB.users.data.find(u => u.usuario === usuario && u.senha === senha);
        let id = user.id;
        if(user){
            const token = jwt.sign({ id }, config.get('JWT.SECRET'), {
                expiresIn: 3000 
              });
            res.status(200).json({
                user: user, 
                token: token
            });
        }
        else
            res.status(404).json({
                message: 'Usuário não encontrado.'
            });
    
    }
  
    return controller;
  }