### Phase 7: Tags Model, API, and basic APIUtil (1 day)

## Rails
### Models
* Tag

### Controllers
* TagsController

### Views
* tags/index.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* TagsIndex
* TagsIndexItem

### Stores
* Tags

### Actions
* ApiActions.receiveAllTags -> triggered by ApiUtil
* ApiActions.receiveSingleTag
* ApiActions.deleteTag
* TagActions.fetchAllTags -> triggers ApiUtil
* TagActions.fetchSingleTag
* TagActions.createTag
* TagActions.editTag
* TagActions.destroyTag

### ApiUtil
* ApiUtil.fetchAllTags
* ApiUtil.fetchSingleTag
* ApiUtil.createTag
* ApiUtil.editTag
* ApiUtil.destroyTag

## Gems/Libraries
* Flux Dispatcher (npm)
