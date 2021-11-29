# { post: {id: 1, message: ""Post successfully deleted"" } }

json.post do
  json.id @post.id
  json.message "Post successfully deleted"
end