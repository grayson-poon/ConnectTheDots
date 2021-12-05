# {
#   connections: [
#     { id: 1, user_id: 1, connection_id: 12 },
#     { id: 2, user_id: 1, connection_id: 8 },
#     { id: 3, user_id: 1, connection_id: 2 },
#   ],
# }

json.connections @connections do |connection|
  json.id connection.id
  json.user_id connection.user_id
  json.connection_id connection.connection_id
  json.request_accepted = connection.request_accepted
end

# json.connected_ids @connections do |connection|
#   connection.connection_id
# end

# AND

# json.pending_connections @pending_connections do |pending|
#   pending.user_id
# end