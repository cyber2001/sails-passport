/**
* Bookmark.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    
  attributes: {

    title : { type: 'string', required: true },

    url : { type: 'string', required: true },
    
    
    toJSON: function() {
        var obj = this.toObject();
        delete obj.createdAt;
        delete obj.updatedAt;
        delete obj.id;
        return obj;
    }
  },
  

};

