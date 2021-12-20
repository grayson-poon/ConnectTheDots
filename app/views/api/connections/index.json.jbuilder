# {
#   connections: [
#     { id: 1, user_id: 1, connection_id: 12 },
#     { id: 2, user_id: 1, connection_id: 8 },
#     { id: 3, user_id: 1, connection_id: 2 },
#   ],
#   pending_connections: [
#     { id: 11, user_id: 5, connection_id: 1 },
#     { id: 10, user_id: 6, connection_id: 1 },
#   ]
# }

# json.connections @connections do |connection|
#   json.id connection.id
#   json.user_id connection.user_id
#   json.connection_id connection.connection_id
#   json.request_accepted connection.request_accepted
# end

# json.pending_connections @pending_connections do |pending|
#   json.id pending.id
#   json.user_id pending.user_id
#   json.connection_id pending.connection_id
#   json.request_accepted pending.request_accepted
# end

json.connections @connections do |connection|
  if connection.request_accepted
    json.id connection.id
    json.user_id connection.user_id
    json.connection_id connection.connection_id
    json.request_accepted connection.request_accepted
  end
end

json.pending_connections @connections do |pending|
  if !pending.request_accepted
    json.id pending.id
    json.user_id pending.user_id
    json.connection_id pending.connection_id
    json.request_accepted pending.request_accepted
  end
end

json.users @connected_users do |user|
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