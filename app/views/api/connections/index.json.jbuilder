# {
#   connected_users: [
#     { id: 1, first_name: "Demo", last_name: "User", pronouns: "he/his", headline: "Chef", post_picture: "url" },
#     { id: 2, first_name: "Demo", last_name: "User", pronouns: "he/his", headline: "Chef", post_picture: "url" },
#     { id: 3, first_name: "Demo", last_name: "User", pronouns: "he/his", headline: "Chef", post_picture: "url" },
#   ],
#   pending_users: [
#     { id: 1, first_name: "Demo", last_name: "User", pronouns: "he/his", headline: "Chef", post_picture: "url" },
#     { id: 2, first_name: "Demo", last_name: "User", pronouns: "he/his", headline: "Chef", post_picture: "url" },
#     { id: 3, first_name: "Demo", last_name: "User", pronouns: "he/his", headline: "Chef", post_picture: "url" },
#   ],
#   user_id: 1,
# }

json.connected_users @connected_users do |user|
  json.id user.id
  json.first_name user.first_name 
  json.last_name user.last_name 
  json.pronouns user.pronouns
  json.headline user.headline
  json.current_location user.current_location
  json.about user.about
  json.profile_picture url_for(user.photo) if user.photo.attached?
  json.connection_ids user.connections.pluck(:connection_id)
end

json.pending_users @pending_users do |pending|
  json.id pending.id
  json.first_name pending.first_name 
  json.last_name pending.last_name 
  json.pronouns pending.pronouns
  json.headline pending.headline
  json.current_location pending.current_location
  json.about pending.about
  json.profile_picture url_for(pending.photo) if pending.photo.attached?
  json.connection_ids pending.connections.pluck(:connection_id)
end

json.user_id @user.id