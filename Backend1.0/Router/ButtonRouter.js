const express = require('express');
const router = express.Router();

const { basicbuttom, incrementLikeAndView } = require('../controller/Buttonsection');

router.post('/basicbutton', basicbuttom);
router.post('/like-view',incrementLikeAndView)

exports.ButtonRouter = router;