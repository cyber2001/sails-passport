module.exports = function(req, res, next){
  // User is allowed to the next policy,
  //or if this is the last policy, the controller
  if(res.isSocket){
    // SOCKETS
    if(req.session &&
      req.session.passport &&
      req.session.passport.user)
    {
      return next();
    }

    res.json(401);

  }else{  
      // HTTP
      if(req.isAuthenticated()){
        console.log("Authenticated: true");
        return next();
      }
      console.log('Authenticated: false');
      return res.redirect('/login');
  }
}
  