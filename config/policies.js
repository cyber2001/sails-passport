

module.exports.policies = {

  '*': true,

  'UserController': {
    '*': true,
    'user': 'isAuthenticated',
    'logout': 'isAuthenticated',
    'login_view' : 'isLoggedIn',
    'signup_view' : 'isLoggedIn',
  }

};
