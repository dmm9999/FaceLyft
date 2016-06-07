json.array!(@friends) do |friend|

  json.id friend.id
  json.name friend.name
  json.email_address friend.email_address
  json.profile_pic_url friend.profile_pic.url
  json.coverpic_url friend.coverpic.url

end
