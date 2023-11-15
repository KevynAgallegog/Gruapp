const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');

let register = (req,res)=>{
    const {nombre,email,contraseña}= req.body;

    let valid = userRepository.addUser(nombre,email,contraseña);

    if (valid) {
        return res.status(201).send(
            {status: 'register ok'}

        );
    } else{
        return res.status(404).send(
            {status: 'Registrado corectamente'}
        );
    }
}

module.exports={
    register
}