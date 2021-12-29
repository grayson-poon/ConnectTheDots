json.users @users do |user|
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