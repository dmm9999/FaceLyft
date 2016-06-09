var AppDispatcher = require('./../dispatcher/dispatcher');
var PostConstants = require('./../constants/post_constants');

var PostActions = {

  receivePost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_POST,
      post : post
    });
  },

  receivePosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_POSTS,
      posts: posts
    });
  },

  removePost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.REMOVE_POST,
      post: post
    });
  }

};

module.exports = PostActions;
