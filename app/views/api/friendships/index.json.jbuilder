json.array!(@friend_requests) do |friend_request|

  json.id friend_request.id
  json.friender_id friend_request.friender_id
  json.friended_id friend_request.friended_id
  json.name friend_request.friender_user.name
  json.thumb asset_path(friend_request.friender_user.profile_pic.url)

end
