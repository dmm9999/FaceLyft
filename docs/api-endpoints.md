# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new` - signup page
- `POST /users` - signup user
- `PATCH /users` - edit user

### Session

- `GET /session/new` - signin page
- `POST /session` - signin user
- `DELETE /session` - signout user

## JSON API

### Profiles

- `GET /api/users/:id/profile` - user's profile page (singular resource)
- `PATCH /api/users/:id/profile` - update user's profile page

### Posts

- `GET /api/posts` - get all posts (newsfeed)
- `GET /api/users/:id/posts` - get user's posts (personal newsfeed)
- `POST /api/posts` - create new post
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`- edit post
- `DELETE /api/posts/:id` - delete post

### Friendships

- `GET /api/users/:id/friendships` - get user's friends
- `POST /api/users/:id/friendships` - make a friend request
- `PATCH /api/friendships/:id` - accept a friend request
- `DELETE /api/friendships/:id` - decline a friend request

### Comments

- `GET /api/posts/:id/comments` - get all comments on a post
- `POST /api/posts/:id/comments`- create new comment on a post
- `PATCH /api/comments/:id` - edit comment
- `DELETE /api/comments/:id` - delete comment

### Likes

- `GET /api/posts/:id/likes` - get likes on a post
- `GET /api/comments/:id/likes` - get likes on a comment
- `POST /api/likes` - like a post or comment
- `DELETE /api/likes/:id` - unlike a post or comment

### Tags

- `GET /api/posts/:id/tags` - get all tags on a post
- `GET /api/comments/:id/tags` - get all tags on a comment
- `POST /api/posts/:id/tags` - create new tag on a post
- `POST /api/comments/:id/tags` - create new tag on a comment
- `DELETE /api/tags/:id` - delete a tag on a post or comment

### Notifications

- `GET /api/users/:id/notifications` - get all user's notifications
- `POST /api/users/:id/notifications` - notify a user
- `GET /api/users/:id/notifications/:id` - get one notification for a user
- `PATCH /api/notifications/:id` - mark a notification as viewed
- `DELETE /api/notifications/:id` - delete a notification
