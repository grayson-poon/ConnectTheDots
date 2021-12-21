# {
#   current_user_id: 1,
#   not_current_user_id: 2,
#   request_accepted: true/false
# }

json.current_user_id @connection.user_id
json.not_current_user_id @connection.connection_id
json.request_accepted @connection.request_accepted