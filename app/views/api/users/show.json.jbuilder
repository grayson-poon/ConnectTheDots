json.user do
  json.extract! @user, :id, :email, :password
end

# json.user do # json.banana, where banana the name of the key in the state
#   json.extract! @user.profile,
#     :id,
#     :first_name,
#     :last_name,
#     :pronouns,
#     :current_location, 
#     :headline, 
#     :about,
#     :profile_picture,
#     :user_id
# end