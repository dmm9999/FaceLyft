json.array!(@users) do |user|

  json.id user.id
  json.name user.name
  json.first_name user.first_name
  json.last_name user.last_name
  json.email_address user.email_address
  json.description user.description
  json.hometown user.hometown
  json.work user.work
  json.school user.school
  json.current_city user.current_city
  json.phone_number user.phone_number
  json.birthday user.birthday
  json.profile_pic_url user.profile_pic.url
  json.coverpic_url user.coverpic.url

  json.friends do
    json.array!(user.friends) do |friend|
      json.id friend.id
      json.name friend.name
      json.email_address friend.email_address
      json.profile_pic_url friend.profile_pic.url
      json.coverpic_url friend.coverpic.url
    end
  end

  json.pending_friends do
    json.array!(user.pending_friends) do |pending_friend|
      json.id pending_friend.id
    end
  end
  
end
