# Phase 2: Profile Model, API and basic APIUtil (1 day)

## Rails

### Models
* Profile

### Controllers

* ProfilesController

### Views

* static_pages/root.html.erb
* profiles/show.json.juilder

## Flux
### Views (React Components)

* App
* Profile

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
