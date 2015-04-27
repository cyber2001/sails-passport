/**
 * BookmarkController
 *
 * @description :: Server-side logic for managing bookmarks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  _config: {
      actions: true,
      shortcuts: false,
      rest: false
    },

  /**
   * `BookmarkController.create()`
   */
    create: function (req, res) {
      
    },


  /**
   * `BookmarkController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `BookmarkController.delete()`
   */
  delete: function (req, res) {
    var id = req.param('id') || 0;
    Bookmark.destroy({id:id}).exec(function(err, bk){
        if(err) return res.serverError();
        res.json(bk);
    });
  },


  /**
   * `BookmarkController.show()`
   */
  show: function (req, res) {
    var id = req.param('id') || 0;
    Bookmark.findOne({id:id}).exec(function(err, bk){
        if(err) return res.send('error occured');
        if(!bk) return res.send('not found');
        res.json(done);
    });
  }
};

