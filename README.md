# FaceLyft

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://facelyft.herokuapp.com

## Minimum Viable Product

FaceLyft is a web application inspired by Facebook that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for a Facebook-inspired site: users have a profile page, users can search for other users using a search bar, users can friend other users, users can create posts, users can comment on posts, users can like posts, posts appear on a newsfeed page
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

FaceLyft will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] User has a profile page with their picture, personal information and newsfeed of their own posts (MVP)
- [ ] Friend and unfriend other users (MVP)
- [ ] Create, read, edit, and delete posts (MVP)
- [ ] Create, read, edit, and delete comments on posts (MVP)
- [ ] Like and unlike posts and comments (MVP)
- [ ] Posts from other users and other websites appear on a newsfeed (MVP)
- [ ] Users can upload pictures (expected feature, but not MVP)
- [ ] Users can tag other users in posts, comments and pictures (expected feature, but not MVP)
- [ ] Users receive notifications when they are tagged or friended (expected feature, but not MVP)
- [ ] Users can respond in other ways to posts and comments (dislike, etc) (expected feature, but not MVP)
- [ ] Users can comment on other comments (expected feature, but not MVP)
- [ ] Users can send messages to other users (bonus feature)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model and controller to handle user sign up
- [ ] create `Session` controller to handle user sign in
- [ ] authentication
- [ ] user signup/signin pages
- [ ] style pages to match Facebook

### Phase 2: Profile Model, API and basic APIUtil (1 day)

**Objective** Users can create and edit profiles featuring their
personal info through the API.

- [ ] create `Profile` model and controller to handle user profile page
- [ ] create `JSON-API` for `Profile`
- [ ] setup `APIUtil` to interact with the API
- [ ] create `React` `Profile` components
- [ ] test out API interaction in the console
- [ ] style profile page (without posts) to match Facebook

### Phase 3: Posts Model, API, and basic APIUtil (1.5 days)

**Objective:** Posts can be created, read, edited and destroyed through
the API.

- [ ] create `Post` model and controller
- [ ] seed the database with a small amount of test data
- [ ] create `JSON-API` for `Posts`
- [ ] setup `APIUtil` to interact with the API
- [ ] create `React` `Post` components
- [ ] test out API interaction in the console
- [ ] style newsfeed page to match Facebook

### Phase 4: Friends Model, API, and basic APIUtil (1 day)

**Objective** Users can send other users friend requests and accept or
deny said requests

- [ ] create `Friendship` model and controller
- [ ] amend seeded data to reflect friendships
- [ ] create `JSON-API` for `Friendships`
- [ ] setup `APIUtil` to interact with the API
- [ ] create `React` `Friend` components
- [ ] test out API interaction in the console
- [ ] style friend requests and friend buttons to match Facebook

### Phase 5: Comments, Likes and Tags (2 days)

**Objective:** Users can comment on posts, like posts and comments and
tag users in posts and comments through the API

- [ ] create `Comment`, `Like` and `Tag` models and controllers
- build out API, Flux loop, and components for:
  - [ ] Comment CRUD
  - [ ] Like CRUD
  - [ ] Tag CRUD
- Use CSS to style new views

### Phase 6: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Notifications when users are tagged
- [ ] Search through site for other users
- [ ] Pagination / infinite scroll for Posts Index
- [ ] Multiple sessions
- [ ] Users can send and receive instant messages from other users

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
