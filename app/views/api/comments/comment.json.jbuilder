# {
#   comment: {
#     body: "text",
#     user_id: 1,
#     post_id: 5,
#   }
# }

json.comment do
  json.body @comment.body
  json.user_id @comment.user_id
  json.post_id @comment.post_id
  json.created_at distance_of_time_in_words(@comment.created_at, Time.now)
end