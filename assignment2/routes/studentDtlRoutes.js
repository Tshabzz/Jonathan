const data = require('../controllers/studentDtlCtrl');
const express = require('express');
const router = express.Router()

router.get('/', data.ss1Students);
router.post('/names', data.ss1StudentNames);
router.put('/ages', data.ss1StudentAge);
router.patch('/classes', data.ss1StudentClass);

module.exports= router;