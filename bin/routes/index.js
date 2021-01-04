// add modules
const express = require('express');
// creating router
const router = express.Router();

// fork
// /api/form
router.use('/form', require('./form'));

// exports
module.exports = router;