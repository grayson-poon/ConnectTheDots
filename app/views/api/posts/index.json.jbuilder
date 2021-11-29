=begin
{ posts: [
    { id: 1, body: "body", picture: "url" },
    { id: 2, body: "body", picture: "url" },
    { id: 3, body: "body", picture: "url" },
  ]
}
=end

json.posts(@posts) do |post|
  json.id post.id
  json.body post.body
  json.picture url_for(@post.photo) if post.photo.attached?
end


=begin
{ comments: [
    { id: 1, body: "body", user_id: 2, post_id: 3 },
    { id: 2, body: "body", user_id: 1, post_id: 2 },
    { id: 3, body: "body", user_id: 3, post_id: 1 },
  ]
}
=end

# json.comments(@comments) do |comment|
#   json.id comment.id
#   json.body comment.body
#   json.user_id comment.user_id
#   json.post_id comment.post_id
# end