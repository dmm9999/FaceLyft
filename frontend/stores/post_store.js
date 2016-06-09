var Store = require('flux/utils').Store;
var AppDispatcher = require('./../dispatcher/dispatcher');

var PostStore = new Store(AppDispatcher);

var _posts = {};

PostStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVE_POST":
      _receivePost(payload.post);
      PostStore.__emitChange();
      break;
    case "RECEIVE_POSTS":
      _receivePosts(payload.posts);
      PostStore.__emitChange();
      break;
    case "REMOVE_POST":
      _removePost(payload.post);
      PostStore.__emitChange();
      break;
  }
};

PostStore.all = function () {
  var results = [];
  for (var postId in _posts) {
    results.push(_posts[postId]);
  }
  return results;
};

_receivePost = function (post) {
  _posts[post.id] = post;
};

_receivePosts = function (posts) {
  _posts = {};
  posts.forEach(function(post) {
    _posts[post.id] = post;
  });
};

_removePost = function (post) {
  delete _posts[post.id];
};


module.exports = PostStore;
