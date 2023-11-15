const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');

function loginUser(name, contraseña, callback) {
    const query = 'SELECT * FROM usuarios WHERE name = ? AND password = ?';
    userRepository.query(query, [name, contraseña], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, results);
    });
  }
  
  module.exports = {
    loginUser,
  };