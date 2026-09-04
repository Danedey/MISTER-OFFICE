// src/controllers/user.controller.js
// const { validationResult } = require('express-validator')
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');
// controler que se encarga que enviar todos los registros de la 
// tabla users (para pruebas)
exports.getAllUsers = async (req, res) => {
    try {
        const rows = await userService.getallusers()
        res.status(200).json({
            success: true,
            msg: "Consulta exitosa",
            data: rows
        });
        
    } catch (error) {
        console.error(error);
        res.status(error.statusCode || 500).json({
        success: false,
        msg: error.message || "Error de servidor, intente más tarde"
        });
    }
}   

