# { post: {id: 1, body: "body", picture: "url" } }

json.post do
  json.id @post.id
  json.body @post.body
  json.picture url_for(@post.photo) if @post.photo.attached?
end