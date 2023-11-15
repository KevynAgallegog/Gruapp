const express = require('express');
const loginController = require('../controllers/login-controller');
const router = express.Router();

router.post('/', (req, res)=>{
    const{name,contraseña}= req.body;

    loginController.loginUser(name,contraseña,(err, results)=>{
        if (err) {
            console.error('Error al realizar la consulta',err);
            res.status(500).json({error: 'Error del Servidor'});
            return;
        }
        if (results.length > 0) {
            res.json({message: 'Bienvenido A gruapp' })
        }else{
            res.status(401).json({error: 'credenciales Invalidas'})
        }
    });

});

module.exports = router;