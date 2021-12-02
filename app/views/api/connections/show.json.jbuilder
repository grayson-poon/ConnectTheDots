# { connection: {
#     id: 308,
#     user_id: 1,
#     connection_id: 2,
#     request_accepted: true/false,
#   }
# }

json.connection do
  json.id @connection.id
  json.user_id @connection.user_id
  json.connection_id @connection.connection_id
  json.request_accepted @connection.request_accepted
end