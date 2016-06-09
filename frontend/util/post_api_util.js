var PostActions = require('./../actions/post_actions');

var PostApiUtil = {

  createPost: function (body, profileId) {
    $.ajax({
      type: 'POST',
      url: '/api/posts',
      data: { body: body, profileId : profileId },
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

};

module.exports = PostApiUtil;
