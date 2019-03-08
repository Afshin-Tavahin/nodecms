const express = require('express');
const router = express.Router();

const adminController = require('app/http/controllers/admin/adminController');

// Admin Routes

router.get('/' , adminController.index);
router.get('/course', adminController.course);





module.exports = router;