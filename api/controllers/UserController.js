/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var passport = require('passport');
module.exports = {
	
  _config: {
      actions: true,
      shortcuts: false,
      rest: false
    },

  /**
   * `UserController.login()`
   */
  login_view: function(req,res){
    res.view('User/login');
  },
  signup_view: function(req,res){
    res.view('User/signup');
  },

  login: function (req, res) {
    passport.authenticate('local', function(err, user, info){
      
      if((err) || (!user)) return res.redirect('/login');

      req.logIn(user, function(err){
        
        if(err) return res.send(err);
        
        res.redirect('/' + user.username)
      });
    })(req, res);
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    req.logout();
    res.redirect('/login');
  },


  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {
    User.create(req.params.all()).exec(function(err, user){
      if(err){
        console.log('not created'+err);
        return res.redirect('/signup');
      }

      res.redirect('/' + user.username);
    });
  },

  showall: function(req, res, next){
    User.find(function(err, users){
      if(err) return next(err);
      res.view({users: users});
    });
  },

  user: function(req, res, next){
    if(req.user.username != req.param('user')) return res.redirect('/'+req.user.username);
    User.findOneByUsername(req.param('user')).exec(function(err, user){
      if(err) return res.send(err);
      if(!user) return res.send('user not found here!');
      res.view('User/profile',{user:user});
    });

  }
};

