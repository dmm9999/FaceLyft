### Phase 5: Comments Model, API, and basic APIUtil (1 day)
## Rails
### Models
* Comment

### Controllers
* CommentsController

### Views
* comments/index.json.jbuilder
* comments/show.json.jbuilder

## Flux
### Views (React Components)
* CommentsIndex
* CommentsIndexItem

### Stores
* Comments

### Actions
* ApiActions.receiveAllComments -> triggered by ApiUtil
* ApiActions.receiveSingleComment
* ApiActions.deleteComment
* CommentActions.fetchAllComments -> triggers ApiUtil
* CommentActions.fetchSingleComment
* CommentActions.createComment
* CommentActions.editComment
* CommentActions.destroyComment

### ApiUtil
* ApiUtil.fetchAllComments
* ApiUtil.fetchSingleComment
* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment

## Gems/Libraries
* Flux Dispatcher (npm)
