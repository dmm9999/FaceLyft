# Phase 3: Posts Model, API, and basic APIUtil (1.5 days)

## Rails
### Models
* Post

### Controllers
* PostsController

### Views
* posts/index.html.erb
* posts/show.html.erb

## Flux
### Views (React Components)
* PostsIndex
* PostsIndexItem

### Stores
* Post

### Actions
* ApiActions.receiveAllPosts -> triggered by ApiUtil
* ApiActions.receiveSinglePost
* ApiActions.deletePost
* PostActions.fetchAllPosts -> triggers ApiUtil
* PostActions.fetchSinglePost
* PostActions.createPost
* PostActions.editPost
* PostActions.destroyPost

### ApiUtil
* ApiUtil.fetchAllPosts
* ApiUtil.fetchSinglePost
* ApiUtil.createPost
* ApiUtil.editPost
* ApiUtil.destroyPost

## Gems/Libraries
* Flux Dispatcher (npm)
