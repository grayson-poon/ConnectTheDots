json.posts @posts do |post|
  json.id post.id
  json.body post.body
  json.user_id post.user_id
  json.created_at distance_of_time_in_words(post.created_at, Time.now)
  json.post_picture url_for(post.photo) if post.photo.attached?
  json.comment_ids post.comments.sort_by(&:created_at).pluck(:id).reverse
end

json.connected_users @posts.each do |post|
  json.id post.user.id
  json.first_name post.user.first_name 
  json.last_name post.user.last_name 
  json.pronouns post.user.pronouns
  json.headline post.user.headline
  json.current_location post.user.current_location
  json.about post.user.about
  json.profile_picture url_for(post.user.photo) if post.user.photo.attached?
  json.connection_ids post.user.connections.pluck(:connection_id)
  json.pending_ids post.user.pending.pluck(:user_id).include?(@user.id) ? [@user.id] : []
end