const { Router } = require('express');
const controller = require('../controller/controller.js');

const router = Router();

router.get('/landing', controller.getApps);
router.get('/react', controller.getApps);
router.get('/javascript', controller.getApps);
router.get('/', controller.getTypes);

module.exports = router;