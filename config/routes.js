

module.exports.routes = {


  '/': {
    view: 'homepage'
  },
  
  'GET /bookmark/show/:id': 'Bookmark.show',
  'GET /bookmark/delete/:id': 'Bookmark.delete',
  'GET /bookmark/add': 'Bookmark.create',

  // User login/logout/signup routes
  'GET /login': 'User.login_view',
  'POST /login': 'User.login',
  'GET /logout': 'User.logout',
  'GET /signup': 'User.signup_view',
  'POST /signup': 'User.signup',
  'GET /users' : 'User.showall',

  // User section
  'GET /:user' : 'User.user',
};
