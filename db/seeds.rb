# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

### Users
# User 1
User.create({
  email: "first@gmail.com",
  password: "password",
  first_name: "First",
  last_name: "First",
  pronouns: "he/his",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
})

# User 2
User.create({
  email: "second@gmail.com",
  password: "password",
  first_name: "Second",
  last_name: "Second",
  pronouns: "she/her",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
})

# User 3
User.create({
  email: "third@gmail.com",
  password: "password",
  first_name: "Third",
  last_name: "Third",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
})

# User 4
User.create({
  email: "fourth@gmail.com",
  password: "password",
  first_name: "Fourth",
  last_name: "Fourth",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
})

# User 5
User.create({
  email: "fifth@gmail.com",
  password: "password",
  first_name: "Fifth",
  last_name: "Fifth",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
})

# Demo User
User.create({
  email: "demo@user.com",
  password: "password",
  first_name: "Demo",
  last_name: "User",
  current_location: "San Francisco, California",
  headline: "Demo User for ConnectTheDots",
  about: "Demo User for ConnectTheDots",
})

### Posts
# User 1
Post.create({ body: "post1 user1", user_id: 1 })
Post.create({ body: "post2 user1", user_id: 1 })
Post.create({ body: "post3 user1", user_id: 1 })

# User 2
Post.create({ body: "post1 user2", user_id: 2 })
Post.create({ body: "post2 user2", user_id: 2 })
Post.create({ body: "post3 user2", user_id: 2 })

# User 3
Post.create({ body: "post1 user3", user_id: 3 })
Post.create({ body: "post2 user3", user_id: 3 })
Post.create({ body: "post3 user3", user_id: 3 })

# Demo User's posts
Post.create({ body: "post1 demo user", user_id: 6 })
Post.create({ body: "post2 demo user", user_id: 6 })
Post.create({ body: "post3 demo user", user_id: 6 })