json.user do
  json.id @user.id
  json.first_name @user.first_name
  json.last_name @user.last_name
  json.pronouns @user.pronouns
  json.current_location @user.current_location
  json.headline @user.headline
  json.about @user.about
  json.profile_picture url_for(@user.photo) if @user.photo.attached?
  json.num_connections @user.connections.length
end