module.exports = app => {
    const controller = require('../controllers/login')();
    
    app.route('/api/v1/login')
      .post(controller.login);
  }