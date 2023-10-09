const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.send('Ola Mundo');
});

module.exports = router;