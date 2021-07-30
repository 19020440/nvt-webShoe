const express = require('express');
const router = express.Router();
const siteController = require('../Controller/SiteController');
const { route } = require('./product');
const validateUser = require('../middleware/validateUser')
router.get('/getComments/:id', siteController.getComments)
router.post('/comments', siteController.comment)
router.get('/newProduct', siteController.newProduct)
router.post('/registration', siteController.register)
router.post('/addCart', siteController.addCart)
router.post('/addAddress', siteController.addAddress)
router.get('/checkAddress', siteController.checkAddress)
router.delete('/removeCart/:id', siteController.removeCart)
router.post('/removeCartAll', siteController.removeCartAll)
router.post('/changeCart', siteController.changeCart)
router.get('/shopCart2', siteController.shopCart2)
router.get('/shopCart', siteController.shopCart)
router.get('/search', siteController.search)
router.get('/logout', siteController.logout)
router.get('/get_profile', siteController.getProfile)
router.post('/login',siteController.login)
router.get('/giay', siteController.index)
module.exports = router;