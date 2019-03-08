const express = require('express');
const router = express.Router();



const adminRouter = require('app/routes/web/admin');
router.use('/admin' , adminRouter);


const homeRouter = require('app/routes/web/home');
router.use('/' , homeRouter);




module.exports = router;