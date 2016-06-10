json.id @post.id
json.body @post.body
json.author_id @post.author_id
json.profile_id @post.profile_id
json.created_at @post.created_at
json.author_name @post.author.name
json.author_profile_pic_url asset_path(@post.author.profile_pic.url)
