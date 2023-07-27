const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Respuesta al get: Hello world!');
  });

module.exports = router;
const express = require('express');
const router = express.Router();


router.get('/users', (req, res) => {
    res.status(200).send(['Usuario Falso','Usuario Falso']);
  });

router.post('/users', (req, res) => {
    res.send(['Usuario Falso','Usuario Falso']);
  });

router.put('/users/:id', (req, res) => {
    res.send(['Usuario Falso','Usuario Falso']);
  });

router.patch('/users/:id', (req, res) => {
    res.send(['Usuario Falso','Usuario Falso']);
  });

router.delete('/users/:id', (req, res) => {
    res.send(['Usuario Falso','Usuario Falso']);
  });

module.exports = router;