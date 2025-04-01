const express = require('express');
const router = express.Router();

const { basicbuttom } = require('../controller/Buttonsection');

router.post('/basicbutton', basicbuttom);

exports.ButtonRouter = router;