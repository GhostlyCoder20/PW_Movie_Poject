const express = require('express');
const router = express.Router();
const response = require('../helpers/responses');

router.get('/', async (req, res) => {
   response.success(req, res, 'Felicidades entrastes !!');
});

module.exports = router;