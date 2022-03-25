const { check, body } = require('express-validator');
const path = require('path');
const fs = require('fs')


module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

]

