# {
#   connections: [
#     { id: 1, user_id: 1, connection_id: 12 },
#     { id: 2, user_id: 1, connection_id: 8 },
#     { id: 3, user_id: 1, connection_id: 2 },
#   ],
#   pending_connections: [
#     { id: 1, user_id: 45, connection_id: 1 },
#     { id: 2, user_id: 32, connection_id: 1 },
#     { id: 3, user_id: 9, connection_id: 1 },
#   ],
# }

json.connected_ids @connections do |connection|
  json.id connection.id
  json.user_id connection.user_id
  json.connection_id connection.connection_id
end

json.pending_connections @pending_connections do |pending|
  json.id pending.id
  json.user_id pending.user_id
  json.connection_id pending.connection_id
end

# json.connected_ids @connections do |connection|
#   connection.connection_id
# end

# AND

# json.pending_connections @pending_connections do |pending|
#   pending.user_id
# end