# Response:

# { posts: [
#     {id: 1, body: "body", user_id: 2, picture: "url" },
#     {id: 1, body: "body", user_id: 2, picture: "url" },
#     {id: 1, body: "body", user_id: 2, picture: "url" },
#   ],
#   users: [
#     { id: 1, first_name: "Demo", last_name: "User", pronouns: "he/his", headline: "Chef", post_picture: "url" },
#     { id: 2, first_name: "Demo", last_name: "User", pronouns: "he/his", headline: "Chef", post_picture: "url" },
#     { id: 3, first_name: "Demo", last_name: "User", pronouns: "he/his", headline: "Chef", post_picture: "url" },
#   ],
#   connections: [
#     { id: 1, user_id: 1, connection_id: 12 },
#     { id: 2, user_id: 1, connection_id: 8 },
#     { id: 3, user_id: 1, connection_id: 2 },
#   ],
#   comments:[
#     { id: 1, body: "body", user_id: 2, post_id: 3 },
#     { id: 2, body: "body", user_id: 1, post_id: 2 },
#     { id: 3, body: "body", user_id: 3, post_id: 1 },
#   ],
# }

json.posts @posts do |post|
  json.id post.id
  json.body post.body
  json.user_id post.user_id
  json.created_at distance_of_time_in_words(post.created_at, Time.now)
  json.post_picture url_for(post.photo) if post.photo.attached?
end

json.users @current_user.connected_users do |user|
  json.id user.id
  json.first_name user.first_name 
  json.last_name user.last_name 
  json.pronouns user.pronouns
  json.headline user.headline
  json.current_location user.current_location
  json.about user.about
  json.profile_picture url_for(user.photo) if user.photo.attached?
  json.num_connections user.connections.length
end

json.connections (@current_user.connections) do |connection|
  json.id connection.id
  json.user_id connection.user_id
  json.connection_id connection.connection_id
  json.request_accepted connection.request_accepted
end