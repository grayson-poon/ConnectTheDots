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
end