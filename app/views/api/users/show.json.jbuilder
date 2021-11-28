json.user do
  json.id @user.id
  json.first_name @user.first_name
  json.last_name @user.last_name
  json.pronouns @user.pronouns.to_s
  json.current_location @user.current_location
  json.headline @user.headline
  json.about @user.about.to_s
  # json.profile_picture @user.photo.attached? ? url_for(@user.photo) : null
  json.profile_picture url_for(@user.photo) if @user.photo.attached?
end