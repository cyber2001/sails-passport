var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcrypt');

// Passport session setup.
// To support persistent login sessions, Passport needs to be able to
// serialize users into and deserialize users out of the session. Typically,
// this will be as simple as storing the user ID when serializing, and finding
// the user by ID when deserializing.
passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.findOneById(id).exec(function(err, user){
    done(err, user);
  });
});

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  function(username, password, done){
    User.findOneByUsername(username).exec(function(err, user){
      if(err) return done(err);
      if(!user) return done(null, false, {message: 'unknown user '+ username});
      bcrypt.compare(password, user.password, function(err,same){
        if(!same){
          return done(null, false, {message:'invalid password'});
        }
        return done(null, user);
      });      
    });
  }
));
