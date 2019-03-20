const controller = require('app/http/controllers/controller');
const passport = require('passport');

class logoutController extends controller {

        logoutProccess( req, res ) {
          req.logout();
          res.clearCookie('remember_token');
          res.redirect('/');
    }
}
module.exports = new logoutController();