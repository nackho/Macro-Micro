const express = require('express');
const router = express.Router();
const bodypartsCtrl = require('../../controllers/api/bodyparts');

// GET /api/items
router.get('/', bodypartsCtrl.index);
// GET /api/items/:id
router.get('/:id', bodypartsCtrl.show);

module.exports = router;