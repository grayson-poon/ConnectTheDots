json.user do # json.banana, where banana the name of the key in the state
  json.extract! @user,
    :id,
    :first_name,
    :last_name,
    :pronouns,
    :current_location, 
    :headline, 
    :about,
    :profile_picture
end

# {
#   user: {
#     id: 1,
#     first_name: "asdf",
#     last_name: "we fasd",
#     ...
#   }
# }