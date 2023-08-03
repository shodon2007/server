const { Router } = require('express');
const controller = require('../controller/controller.js');
console.log(controller);
// const getApps = require('../controller/getAppsControllers');
// const getTypes = require('../controller/getTypesController');

const router = Router();

router.get('/landing', controller.getApps);
router.get('/react', controller.getApps);
router.get('/javascript', controller.getApps);
router.get('/', controller.getTypes);

module.exports = router;