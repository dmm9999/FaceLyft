### Phase 6: Likes Model, API, and basic APIUtil (1 day)

## Rails
### Models
* Like

### Controllers
* LikesController

### Views
* likes/index.json.jbuilder
* likes/show.json.jbuilder

## Flux
### Views (React Components)
* LikesIndex
* LikesIndexItem

### Stores
* Likes

### Actions
* ApiActions.receiveAllLikes -> triggered by ApiUtil
* ApiActions.receiveSingleLike
* ApiActions.deleteLike
* LikeActions.fetchAllLikes -> triggers ApiUtil
* LikeActions.fetchSingleLike
* LikeActions.createLike
* LikeActions.editLike
* LikeActions.destroyLike

### ApiUtil
* ApiUtil.fetchAllLikes
* ApiUtil.fetchSingleLike
* ApiUtil.createLike
* ApiUtil.editLike
* ApiUtil.destroyLike

## Gems/Libraries
* Flux Dispatcher (npm)
