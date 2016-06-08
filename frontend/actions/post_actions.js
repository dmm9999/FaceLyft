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

};

module.exports = PostActions;
