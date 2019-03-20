const express = require('express');
const router = express.Router();


// Controllers Section
const homeController = require('app/http/controllers/homeController');
const loginController = require('app/http/controllers/auth/loginController');
const registerController = require('app/http/controllers/auth/registerController');
const logoutController = require('app/http/controllers/auth/logoutController');


// Middleware
const redirectfAuthentication = require('app/http/middleware/redirectfAuthentication');


// Home Routes
router.get('/' , homeController.index);



// Login and Logout route
router.get('/login' , redirectfAuthentication.handle , loginController.showLoginForm);
router.post('/login', redirectfAuthentication.handle ,  loginController.loginProccess);
router.get('/logout' , logoutController.logoutProccess);




// Register route
router.get('/register' , redirectfAuthentication.handle , registerController.showRegistrationForm);
router.post('/register', redirectfAuthentication.handle , registerController.registerProccess);




// router.get('/logout', (req, res) => {
//     req.logout();
//     req.redirect('/');
// });




module.exports = router;