var express = require('express');
var router = express.Router();
const { exec } = require('child_process');
/* GET home page. */
var r = 0;
var b = 0;
var w = 255;
var g = 0;
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', r: r, b: b, g: g, w: w });
});

router.get('/get', function(req, res, next) {
  res.send({r: r, b: b, g: g, w: w})
});

router.post('/set', function(req, res, next) {
	[r, g, b, w] = [req.body.r, req.body.g, req.body.b, req.body.w];
	exec(`pigs p 27 ${g}`, () => {});
	exec(`pigs p 23 ${w}`, () => {});
	exec(`pigs p 22 ${r}`, () => {});
	exec(`pigs p 24 ${b}`, () => {});
	res.redirect('back');
});

module.exports = router;
