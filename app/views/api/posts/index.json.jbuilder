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
#   current_user_id: 1,
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
  json.comment_ids post.comments.sort_by(&:created_at).pluck(:id)
end

json.connected_users @current_user.connected_users do |user|
  json.id user.id
  json.first_name user.first_name 
  json.last_name user.last_name 
  json.pronouns user.pronouns
  json.headline user.headline
  json.current_location user.current_location
  json.about user.about
  json.profile_picture url_for(user.photo) if user.photo.attached?
  json.connection_ids user.connections.pluck(:connection_id)
  json.pending_ids user.pending.pluck(:user_id).include?(@current_user.id) ? [@current_user.id] : []
end

json.current_user_id @current_user.id