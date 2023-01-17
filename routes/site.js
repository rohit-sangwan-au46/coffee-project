const express = require('express');
const router = express.Router();
const siteController = require('../controllers/SiteController');

//get route to call get/post method
router.get('/about',siteController.about);
router.get('/store',siteController.store);
router.get('/', siteController.home);

module.exports = router;

