### Phase 4: Friends Model, API, and basic APIUtil (1 day)

## Rails
### Models
* Friendship

### Controllers
* FriendshipsController

### Views
* friendships/index.html.erb
* friendships/show.html.erb

## Flux
### Views (React Components)
* FriendshipsIndex
* FriendshipsIndexItem

### Stores
* Friendship

### Actions
* ApiActions.receiveAllFriendships -> triggered by ApiUtil
* ApiActions.receiveSingleFriendship
* ApiActions.deleteFriendship
* FriendshipActions.fetchAllFriendships -> triggers ApiUtil
* FriendshipActions.fetchSingleFriendship
* FriendshipActions.createFriendship
* FriendshipActions.editFriendship
* FriendshipActions.destroyFriendship

### ApiUtil
* ApiUtil.fetchAllFriendships
* ApiUtil.fetchSingleFriendship
* ApiUtil.createFriendship
* ApiUtil.editFriendship
* ApiUtil.destroyFriendship

## Gems/Libraries
* Flux Dispatcher (npm)
