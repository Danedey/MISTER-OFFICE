// src/routes/user.routes.js
const express = require('express');
const router = express.Router();

// importar los controllers
const userController = require('../controllers/user.controller');

// Ruta para obtener todos los usuarios
router.get('/getall', userController.getAllUsers);

module.exports = router;