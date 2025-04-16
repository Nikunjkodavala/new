const express = require('express');
const router = express.Router();

const { basicbuttom, incrementLikeAndView, getAllButtons } = require('../controller/Buttonsection');

router.post('/basicbutton', basicbuttom);
router.get('/getbasicbutton',getAllButtons);
router.post('/like-view',incrementLikeAndView)

exports.ButtonRouter = router;