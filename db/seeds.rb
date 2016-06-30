# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

  homer = User.create(email_address: "homer@simpson.com", password: "password")
  lisa = User.create(email_address: "lisa@simpson.com", password: "password")
  bart = User.create(email_address: "bart@simpson.com", password: "password")
  User.create(email_address: "marge@simpson.com", password: "password")
  User.create(email_address: "maggie@simpson.com", password: "password")
  User.create(email_address: "chief@wiggum.com", password: "password")
  User.create(email_address: "professor@frink.com", password: "password")
  User.create(email_address: "mr@burns.com", password: "password")
  Post.create(body: "Hey Lisa! It's Homer!", author_id: homer.id , profile_id: lisa.id)
  Post.create(body: "Hey Dad! It's Lisa!", author_id: lisa.id , profile_id: homer.id)
  Friendship.create(friender_id: homer.id, friended_id: lisa.id, accepted: true)
  Friendship.create(friender_id: lisa.id, friended_id: bart.id, accepted: true)
