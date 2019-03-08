const controller = require('app/http/controllers/controller')


class indexController extends controller {
    index(req , res) {
        res.json('Admin Home Page@@')
    }

    course ( req , res) {
        res.json('Course Overview here')
    }
}





module.exports = new indexController();