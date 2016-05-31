# Schema Information


## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
body        | text      | not null
post_id     | integer   | not null, foreign key (references posts), indexed

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
friender_id | integer   | not null, foreign key (references users), indexed
friended_id | integer   | not null, foreign key (references users), indexed
accepted    | boolean   | not null, default: false

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
likeable_id | integer   | not null, foreign key (references posts, comments), indexed
likeable_type|string    | not null, inclusion: posts, comment

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
sender_id   | integer   | not null, foreign key (references users), indexed
recipient_id| integer   | not null, foreign key (references users), indexed
body        | text      | not null
viewed      | boolean   | not null, default: false


## notifications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
notifier_id | integer   | not null, foreign key (references users), indexed
notified_id | integer   | not null, foreign key (references users), indexed
notifiable_id|integer   | not null, foreign key (references tags, friendships)
notifiable_type|string  | not null, inclusion: tags, friendships
viewed      | boolean   | not null, default: false

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tagger_id   | integer   | not null, foreign key (references users), indexed
tagged_id   | integer   | not null, foreign key (references users), indexed
taggable_id | integer   | not null, foreign key (references posts, comments), indexed
taggable_type| string   | not null, inclusion: posts, comments

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email_address   | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
phone_number    | string    |
date_of_birth   | date      |
gender          | string    | inclusion: m, f
hometown        | string    |
profile_picture | image     |
