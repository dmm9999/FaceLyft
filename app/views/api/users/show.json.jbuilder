# json.extract! @user, :id, :email_address, :description, :hometown, :work,
# :school, :current_city, :phone_number, :birthday, :profile_pic.url

json.id @user.id
json.name @user.name
json.email_address @user.email_address
json.description @user.description
json.hometown @user.hometown
json.work @user.work
json.school @user.school
json.current_city @user.current_city
json.phone_number @user.phone_number
json.birthday @user.birthday
json.profile_pic_url asset_path(@user.profile_pic.url)
json.coverpic_url asset_path(@user.coverpic.url)
