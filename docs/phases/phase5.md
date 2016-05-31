### Phase 5: Comments, Likes and Tags (2 days)

## Rails
### Models
* Comment
* Like
* Tag

### Controllers
* CommentsController
* LikesController
* TagsController

### Views
* comments/index.json.jbuilder
* comments/show.json.jbuilder
* likes/index.json.jbuilder
* likes/show.json.jbuilder
* tags/index.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* CommentsIndex
* CommentsIndexItem
* LikesIndex
* LikesIndexItem
* TagsIndex
* TagsIndexItem

### Stores
* Comments
* Likes
* Tags

### Actions
* ApiActions.receiveAllComments -> triggered by ApiUtil
* ApiActions.receiveSingleComment
* ApiActions.deleteComment
* CommentActions.fetchAllComments -> triggers ApiUtil
* CommentActions.fetchSingleComment
* CommentActions.createComment
* CommentActions.editComment
* CommentActions.destroyComment
* ApiActions.receiveAllLikes -> triggered by ApiUtil
* ApiActions.receiveSingleLike
* ApiActions.deleteLike
* LikeActions.fetchAllLikes -> triggers ApiUtil
* LikeActions.fetchSingleLike
* LikeActions.createLike
* LikeActions.editLike
* LikeActions.destroyLike
* ApiActions.receiveAllTags -> triggered by ApiUtil
* ApiActions.receiveSingleTag
* ApiActions.deleteTag
* TagActions.fetchAllTags -> triggers ApiUtil
* TagActions.fetchSingleTag
* TagActions.createTag
* TagActions.editTag
* TagActions.destroyTag

### ApiUtil
* ApiUtil.fetchAllComments
* ApiUtil.fetchSingleComment
* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment
* ApiUtil.fetchAllLikes
* ApiUtil.fetchSingleLike
* ApiUtil.createLike
* ApiUtil.editLike
* ApiUtil.destroyLike
* ApiUtil.fetchAllTags
* ApiUtil.fetchSingleTag
* ApiUtil.createTag
* ApiUtil.editTag
* ApiUtil.destroyTag

## Gems/Libraries
* Flux Dispatcher (npm)
