const express = require('express');
const router = express.Router();
const bodypartsCtrl = require('../../controllers/api/bodyparts');

router.get('/', bodypartsCtrl.index);
router.get('/:id', bodypartsCtrl.show);

module.exports = router;