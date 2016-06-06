json.array!(@friends) do |friend|

  json.id friend.id
  json.email_address friend.email_address
  json.profile_pic_url asset_path(friend.profile_pic.url)
  json.coverpic_url asset_path(friend.coverpic.url)

end
