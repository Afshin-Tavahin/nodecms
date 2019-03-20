const database = require('./database');
const session = require('./session');
const layout = require('./layout');
const service = require('./service')



module.exports ={
    database,
    session,
    layout,
    service,
    port: 3000,
    cookie_secretkey : process.env.COOKIE_SECRETKEY
};