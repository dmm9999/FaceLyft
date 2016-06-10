var LikeApiUtil = {

  likePost: function (id) {
    $.ajax({
      type: 'POST',
      url: 'api/posts/' + id + '/likes',
      data: { id: id },
      dataType: 'json',
      success: function (likedPost) {
        
      }
    });
  }

};

module.exports = LikeApiUtil;
