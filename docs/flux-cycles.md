# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Post Cycles

### Posts API Request Actions

* `fetchAllPosts`
  0. invoked from `PostsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/posts` is called.
  0. `receiveAllPosts` is set as the callback.

* `createPost`
  0. invoked from new post button `onClick`
  0. `POST /api/posts` is called.
  0. `receiveSinglePost` is set as the callback.

* `fetchSinglePost`
  0. invoked from `PostDetail` `didMount`/`willReceiveProps`
  0. `GET /api/posts/:id` is called.
  0. `receiveSinglePost` is set as the callback.

* `updatePost`
  0. invoked from `PostForm` `onSubmit`
  0. `POST /api/posts/:id` is called.
  0. `receiveSinglePost` is set as the callback.

* `destroyPost`
  0. invoked from delete post button `onClick`
  0. `DELETE /api/posts/:id` is called.
  0. `removePost` is set as the callback.

### Posts API Response Actions

* `receiveAllPosts`
  0. invoked from an API callback.
  0. `Post` store updates `_posts` and emits change.

* `receiveSinglePost`
  0. invoked from an API callback.
  0. `Post` store updates `_posts[id]` and emits change.

* `removePost`
  0. invoked from an API callback.
  0. `Post` store removes `_posts[id]` and emits change.

### Store Listeners

* `PostsIndex` component listens to `Post` store.
* `PostDetail` component listens to `Post` store.


## Comment Cycles

### Comments API Request Actions

* `fetchAllComments`
  0. invoked from `PostDetail` `didMount`/`willReceiveProps`
  0. `GET /api/posts/:id/comments` is called.
  0. `receiveAllComments` is set as the callback.

* `createComment`
  0. invoked from new comment button `onClick`
  0. `POST /api/posts/:id/comments` is called.
  0. `receiveSingleComment` is set as the callback.

* `fetchSingleComment`
  0. invoked from `CommentDetail` `didMount`/`willReceiveProps`
  0. `GET /api/posts/:id/comments/:id` is called.
  0. `receiveSingleComment` is set as the callback.

* `updateComment`
  0. invoked from `CommentForm` `onSubmit`
  0. `POST /api/posts/:id/comments/:id` is called.
  0. `receiveSingleComment` is set as the callback.

* `destroyComment`
  0. invoked from delete comment button `onClick`
  0. `DELETE /api/posts/:id/comments/:id` is called.
  0. `removeComment` is set as the callback.

### Comments API Response Actions

* `receiveAllComments`
  0. invoked from an API callback.
  0. `Comment` store updates `_comments` and emits change.

* `receiveSingleComment`
  0. invoked from an API callback.
  0. `Comment` store updates `_comments[id]` and emits change.

* `removeComment`
  0. invoked from an API callback.
  0. `Comment` store removes `_comments[id]` and emits change.

### Store Listeners

* `CommentsIndex` component listens to `Comment` store.

## Like Cycles

### Likes API Request Actions

* `fetchAllLikes`
  0. invoked from `PostDetail` or `CommentDetail`
  `didMount`/`willReceiveProps`
  0. `GET /api/posts/:id/likes` or
  `GET /api/posts/:id/comments/:id/likes` is called.
  0. `receiveAllLikes` is set as the callback.

* `createLike`
  0. invoked from like button `onClick`
  0. `POST /api/posts/:id/likes` or
  `POST /api/posts/:id/comments/:id/likes` is called.
  0. `receiveSingleLike` is set as the callback.

* `fetchSingleLike`
  0. invoked from `PostDetail` or
  `CommentDetail` `didMount`/`willReceiveProps`
  0. `GET /api/posts/:id/likes/:id` or
  `GET /api/posts/:id/comments/:id/likes/:id` is called.
  0. `receiveSingleLike` is set as the callback.

* `destroyLike`
  0. invoked from like button `onClick`
  0. `DELETE /api/posts/:id/comments/:id` or
  `DELETE /api/posts/:id/comments/:id/likes/:id` is called.
  0. `removeLike` is set as the callback.

### Likes API Response Actions

* `receiveAllLikes`
  0. invoked from an API callback.
  0. `Like` store updates `_likes` and emits change.

* `receiveSingleLike`
  0. invoked from an API callback.
  0. `Like` store updates `_likes[id]` and emits change.

* `removeLike`
  0. invoked from an API callback.
  0. `Like` store removes `_likes[id]` and emits change.

### Store Listeners

* `LikesIndex` component listens to `Like` store.

## Friendship Cycles

### Friendships API Request Actions

* `fetchAllFriendships`
  0. invoked from `FriendshipsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/friendships` is called.
  0. `receiveAllFriendships` is set as the callback.

* `createFriendship`
  0. invoked from new friendship button `onClick`
  0. `POST /api/friendships` is called.
  0. `receiveSingleFriendship` is set as the callback.

* `fetchSingleFriendship`
  0. invoked from `FriendshipDetail` `didMount`/`willReceiveProps`
  0. `GET /api/friendships/:id` is called.
  0. `receiveSingleFriendship` is set as the callback.

* `updateFriendship`
  0. invoked from `FriendshipForm` `onSubmit`
  0. `POST /api/friendships/:id` is called.
  0. `receiveSingleFriendship` is set as the callback.

* `destroyFriendship`
  0. invoked from delete friendship button `onClick`
  0. `DELETE /api/friendships/:id` is called.
  0. `removeFriendship` is set as the callback.

### Friendships API Response Actions

* `receiveAllFriendships`
  0. invoked from an API callback.
  0. `Friendship` store updates `_friendships` and emits change.

* `receiveSingleFriendship`
  0. invoked from an API callback.
  0. `Friendship` store updates `_friendships[id]` and emits change.

* `removeFriendship`
  0. invoked from an API callback.
  0. `Friendship` store removes `_friendships[id]` and emits change.

### Store Listeners

* `FriendshipsIndex` component listens to `Friendship` store.
* `FriendshipDetail` component listens to `Friendship` store.

## Tag Cycles

### Tags API Request Actions

* `fetchAllTags`
  0. invoked from `PostDetail` or `CommentDetail`
  `didMount`/`willReceiveProps`
  0. `GET /api/tags/:id/likes` or
  `GET /api/tags/:id/comments/:id/likes` is called.
  0. `receiveAllTags` is set as the callback.

* `createTag`
  0. invoked from like button `onClick`
  0. `POST /api/tags/:id/likes` or
  `POST /api/tags/:id/comments/:id/likes` is called.
  0. `receiveSingleTag` is set as the callback.

* `fetchSingleTag`
  0. invoked from `PostDetail` or
  `CommentDetail` `didMount`/`willReceiveProps`
  0. `GET /api/tags/:id/likes/:id` or
  `GET /api/tags/:id/comments/:id/likes/:id` is called.
  0. `receiveSingleTag` is set as the callback.

* `destroyTag`
  0. invoked from like button `onClick`
  0. `DELETE /api/tags/:id/comments/:id` or
  `DELETE /api/tags/:id/comments/:id/likes/:id` is called.
  0. `removeTag` is set as the callback.

### Tags API Response Actions

* `receiveAllTags`
  0. invoked from an API callback.
  0. `Tag` store updates `_likes` and emits change.

* `receiveSingleTag`
  0. invoked from an API callback.
  0. `Tag` store updates `_likes[id]` and emits change.

* `removeTag`
  0. invoked from an API callback.
  0. `Tag` store removes `_likes[id]` and emits change.

### Store Listeners

* `TagsIndex` component listens to `Tag` store.
