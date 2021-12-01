# { post: {id: 1, body: "body", user_id: 2, picture: "url" } }

json.post do
  json.id @post.id
  json.body @post.body
  json.user_id @post.user_id
  json.created_at distance_of_time_in_words(@post.created_at, Time.now)
  json.post_picture url_for(@post.photo) if @post.photo.attached?
end