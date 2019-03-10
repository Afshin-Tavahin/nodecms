const express = require('express');
const router = express.Router();


// Controllers Section

const homeController = require('app/http/controllers/homeController');
const loginController = require('app/http/controllers/auth/loginController');
const registerController = require('app/http/controllers/auth/registerController');



// Home Routes

router.get('/' , homeController.index);
router.get('/login' , loginController.showLoginForm);
router.get('/register' , registerController.showRegistrationForm);
router.post('/register', registerController.registerProccess);


module.exports = router;