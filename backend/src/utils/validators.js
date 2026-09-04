// src/utils/validators.js
const { body } = require('express-validator');

exports.sigupValidation = [

    body('email')
        .trim()  // elimina espacios en blanco al inicio y final
        .isEmail().withMessage('Debe ser un email valido')  // se asegura que el email tenga el formato correcto
        .normalizeEmail(), // sanitizar email (quitar espacios, normaliza dominios)'

    body('password')
        .isLength({ min: 8 }).withMessage('La contrasena debe tener al menos 8 caracteres')
        .matches(/[0-9]/).withMessage('Debe contener al menos un numero')
        .trim(), // elimina espacios en blanco al inicio y final

    body('nombre')
        .not().isEmpty().withMessage('El nombre es obligatorio')
        .isLength({ max: 50}).withMessage('El nombre no puede exceder 50 caracteres')
        .escape(), // sanitiza quitando caracteres peligrosos

]

exports.loginValidation = [
    body('email').trim().isEmail().withMessage('Debe de ser un correo valido').normalizeEmail(),
    body('password').notEmpty().withMessage('La contrasena es obligatoria'),
]

