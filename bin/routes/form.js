const express = require('express');
const router = express.Router();

const formController = require('../controllers/formController');

//================================= ROUTES ==================================
// /api/form/post
router.post('/post', formController.post);

module.exports = router;
