const express = require('express');
const router = express.Router();

/* GET login page. */
router.get('/', function (req, res, next) {
	res.render('login', {
		layout:'login'
	});
});
/* GET dashboard page. */
router.get('/dashboard', function (req, res, next) {
	res.locals.headerTitle = 'Wall';
	res.render('dashboard');
});

module.exports = router;
