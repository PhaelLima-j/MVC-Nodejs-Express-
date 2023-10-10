const express = require('express');

const { Pedido } = require('../models');

const router = express.Router();

router.get('/', (_, res) => {
    Pedido.find({}).then((pedidos) => {
         res.render('pedidos/index', {
            nomeDoUsuario: "Raphael Lima",
            pedidos: pedidos,
         });
    });
});

module.exports = router;