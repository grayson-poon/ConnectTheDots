# @user.connections.each do |connection|
#   json.set! connection.id do
#     connection.posts
#   end
# end

# json.user do
#   json.extract! @user,
#     :id,
#     :first_name,
#     :last_name,
#     :pronouns,
#     :current_location, 
#     :headline, 
#     :about,
#     :profile_picture
# end