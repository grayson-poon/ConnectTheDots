# json.user do
#   json.extract! @user, :id, :email, :connected_ids
# end

json.user do
  json.extract! @user, :id, :email, :password
end