# Response:

# { posts: [
#     {id: 1, body: "body", user_id: 2, picture: "url" },
#     {id: 1, body: "body", user_id: 2, picture: "url" },
#     {id: 1, body: "body", user_id: 2, picture: "url" },
#   ],
#   users: [
#     { id: 1, first_name: "Demo", last_name: "User", pronouns: "he/his", headline: "Chef", post_picture: "url" },
#     { id: 2, first_name: "Demo", last_name: "User", pronouns: "he/his", headline: "Chef", post_picture: "url" },
#     { id: 3, first_name: "Demo", last_name: "User", pronouns: "he/his", headline: "Chef", post_picture: "url" },
#   ],
#   comments:[
#     { id: 1, body: "body", user_id: 2, post_id: 3 },
#     { id: 2, body: "body", user_id: 1, post_id: 2 },
#     { id: 3, body: "body", user_id: 3, post_id: 1 },
#   ],
# }

json.posts @posts do |post|
  json.id post.id
  json.body post.body
  json.user_id post.user_id
  json.post_picture url_for(@post.photo) if post.photo.attached?
end

json.users @posts do |post|
  json.id post.user.id
  json.first_name post.user.first_name 
  json.last_name post.user.last_name 
  json.pronouns post.user.pronouns
  json.headline post.user.headline 
  json.profile_picture url_for(post.user.photo) if post.user.photo.attached? 
end

# json.comments @posts do |post|
#   json.array!(post.comments) do |comment|
#     json.id comment.id
#     json.body comment.body
#     json.user_id comment.user_id
#     json.post_id comment.post_id
#   end
# end


# json.comments(@posts) do |post|
#   post.comments do |comment|
#     json.id
#     json.body
#     json.user_id
#     json.post_id
#   end
# end