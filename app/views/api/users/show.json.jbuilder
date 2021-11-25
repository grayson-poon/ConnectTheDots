json.user do
  json.id @user.id
  json.first_name @user.first_name
  json.last_name @user.last_name
  json.pronouns @user.pronouns
  json.current_location @user.current_location
  json.headline @user.headline
  json.about @user.about
  if json.profile_picture
    json.profile_picture url_for(@user.photo)
  end
end

# json.extract! @user,
#     :id,
#     :first_name,
#     :last_name,
#     :pronouns,
#     :current_location, 
#     :headline, 
#     :about
#   # json.profile_picture url_for(@user.photo, format: :json)

# json.id = @user.id
#   json.first_name @user.first_name
#   json.last_name @user.last_name
#   json.pronouns @user.pronouns
#   json.current_location @user.current_location
#   json.headline @user.headline
#   json.about @user.about
#   # json.profile_picture url_for(@user.photo, format: :json)