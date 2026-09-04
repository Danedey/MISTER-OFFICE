// src/controllers/user.controller.js
const authService = require('../services/auth.service');

exports.sigup = async (req, res) => {
    try{
        const { email, password, nombre } = req.body;

        await authService.sigup(email, password, nombre);
        
        res.status(201).json({
            success: true,
            msg: "Usuario registrado con exito"
        });

    } catch (error) {
        console.error('Valio madres el registro', error);
        res.status(error.statusCode || 500).json({
        success: false,
        msg: error.message || "Error de servidor, intente más tarde"
        });
    }
}

exports.login = async (req, res) => {
    try{
        const { email, password  } = req.body;

        const { token, user } = await authService.login(email, password);

        res.status(200).json({
            success: true,
            token,
            msg: "Login con exito",
            data: { 
                user: user.nombre,
                email: user.email, 
                rol: user.rol
            }
        });

    }catch (error) {
        console.error(error);
        res.status(error.statusCode || 500).json({
        success: false,
        msg: error.message || "Error de servidor, intente más tarde"
        });
    }
}