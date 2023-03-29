const Router = require('express');
const router = new Router();
const testController = require('../controllers/test.controller');

router.post('/', testController.createTest)

module.exports = router;