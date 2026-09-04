// src/routes/auth.routes.js
const express = require('express');
const router = express.Router();

// importar los middleware para validar los datos que llegar del frontend al momento
// de iniciar sesion
const { sigupValidation, loginValidation } = require('../utils/validators')
const { handleValidationErrors } = require('../middlewares/auth.middleware')


// importar los controllers
const authController = require('../controllers/auth.controller');

// ruta para registrar a un usuario
router.post('/sigup', sigupValidation, handleValidationErrors, authController.sigup);

//ruta para iniciar sesion
router.post('/login', loginValidation, handleValidationErrors, authController.login);


module.exports = router;