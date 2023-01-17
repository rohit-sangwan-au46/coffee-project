const express = require('express');
const router = express.Router();
const menuController = require('../controllers/MenuController');

router.get('/create', menuController.create);   //Render create page
router.post('/create', menuController.store);   //Submit drinks (store:luu tru)

router.get('/manage/:id/edit', menuController.edit); // Render Update Page
router.put('/manage/:id/edit',menuController.update); //Submit Update

router.delete('/manage/:id',menuController.destroy); //Delete Drinks

router.get('/manage', menuController.manage);   //Render Manage Page

router.get('/:slug', menuController.show);
router.get('/', menuController.menu);

module.exports = router;