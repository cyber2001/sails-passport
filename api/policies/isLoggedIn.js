module.exports = function(req, res, next){
  // User is allowed to the next policy,
  //or if this is the last policy, the controller

      // HTTP
      if(req.isAuthenticated()){
        return res.redirect('/'+req.user.username);
        
      }else{
        return next();
      }

};
  