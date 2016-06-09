var PostActions = require('./../actions/post_actions');

var PostApiUtil = {

  createPost: function (post) {
    $.ajax({
      type: 'POST',
      url: '/api/posts',
      data: { user : post },
      dataType: 'json',
      success: function (post) {
        PostActions.receivePost(post);
      }
    });
  },

  updatePost: function (updatedPost) {
    $.ajax({
      type: 'PATCH',
      url: '/api/posts/' + id,
    });
  },

  deletePost: function (id) {
    $.ajax({
      type: 'DELETE',
      url: '/api/posts/' + id,
      dataType: 'json',
      success: function (deletedPost) {
        PostActions.removePost(deletedPost);
      }
    });
  },

  fetchPosts: function (id) {
    $.ajax({
      type: 'GET',
      url: '/api/users/' + id + '/posts',
      dataType: 'json',
      success: function (posts) {
        PostActions.receivePosts(posts);
      }
    });
  },

  fetchFeedPosts: function () {
    $.ajax({
      type: 'GET',
      url: 'api/user/feed',
      dataType: 'json',
      success: function (posts) {
        PostActions.receivePosts(posts);
      }
    });
  }

};

module.exports = PostApiUtil;
