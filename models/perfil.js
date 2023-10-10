const { Schema } = require('mongoose');

const Perfil = new Schema({
    pessoa: {
        nome: {
            type: String,
            required: true,
        },
        idade: {
            type: Number,
            required: true,
        }
    }
});

module.exports = Perfil;