const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('app/models/user');



passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});


// Define register strategy
passport.use('local.register' , new localStrategy({

    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
} , (req , email , password , done) => {

    User.findOne({ 'email' : email } , (err , user) =>{
        if (err) return done(err);
        if (user) return done(null, false,  req.flash('errors' , ' این نام کاربری در سیستم موجود می باشد'));

        const newUser = new User({
            name : req.body.name,
            email,
            password
        });

        newUser.save(err => {
            if (err) return done(err , false , req.flash('errors' , 'ثبت نام با موفقیت انجام نشد اطفا دوباره سعی کنید'));
            done(null , newUser);
        })
    })
}))


// Define login strategy
passport.use('local.login' , new localStrategy({

    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
} , (req , email , password , done) => {

    User.findOne({ 'email' : email } , (err , user) =>{
        if (err) return done(err);

        if (! user || ! user.comparePassword(password)) {
            return done(null, false , req.flash( 'errors' , 'اطلاعات وارد شده صحیح نمی باشد '));
        }


        done(null , user);

    })
}))