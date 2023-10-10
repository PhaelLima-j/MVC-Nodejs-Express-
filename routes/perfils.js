const express = require('express');

const { Perfil } = require('../models');

const router = express.Router();

router.get('/', (_, res) => {
    Perfil.find({}).then((perfils) => {
         res.render('perfil/index', {
            perfils: perfils,
         });
    });
});

module.exports = router;