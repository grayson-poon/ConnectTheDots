# {
#   comments: [
#     { id: 1, body: "text", user_id: 1, post_id: 1 },
#     { id: 2, body: "text", user_id: 2, post_id: 1 },
#     { id: 3, body: "text", user_id: 3, post_id: 1 },
#   ]
# }

json.comments @comments do |comment|
  json.id comment.id
  json.body comment.body
  json.user_id comment.user_id
  json.post_id comment.post_id
  json.created_at distance_of_time_in_words(comment.created_at, Time.now)
end

json.commented_users @post.commented_users do |user|
  json.id user.id
  json.first_name user.first_name
  json.last_name user.last_name
  json.pronouns user.pronouns
  json.current_location user.current_location
  json.headline user.headline
  json.about user.about
  json.profile_picture url_for(user.photo) if user.photo.attached?
  json.connection_ids user.connections.pluck(:connection_id)
  json.pending_ids @current_user == user ? (
    user.pending.pluck(:user_id)
  ) : (
    user.pending.pluck(:user_id).include?(@current_user.id) ? [@current_user.id] : []
  )
end