json.connections @connections do |connection|
  json.id connection.id
  json.user_id connection.user_id
  json.connection_id connection.connection_id
end

json.not_current_user_id @not_current_user_id