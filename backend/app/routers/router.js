let express = require('express');
let router = express.Router();
 
const controller = require('../controllers/controller.js');

// Product API
router.get('/api/getproducts', controller.getproducts);    // get products
router.delete('/api/updateproducts/:name', controller.deleteProducts);       // delete products

// Article API
router.get('/api/articles', controller.articles);       // get articles

module.exports = router;