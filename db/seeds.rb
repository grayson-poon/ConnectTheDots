# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

### Users
# User 1
user1 = User.create({
  email: "first@gmail.com",
  password: "password",
  first_name: "First",
  last_name: "User",
  pronouns: "he/his",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
})

# User 2
user2 = User.create({
  email: "second@gmail.com",
  password: "password",
  first_name: "Second",
  last_name: "User",
  pronouns: "she/her",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
})

# User 3
user3 = User.create({
  email: "third@gmail.com",
  password: "password",
  first_name: "Third",
  last_name: "User",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
})

# User 4
user4 = User.create({
  email: "fourth@gmail.com",
  password: "password",
  first_name: "Fourth",
  last_name: "User",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
})

# User 5
user5 = User.create({
  email: "fifth@gmail.com",
  password: "password",
  first_name: "Fifth",
  last_name: "User",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
})

# Demo User
demo_user = User.create({
  email: "demo@user.com",
  password: "password",
  first_name: "Demo",
  last_name: "User",
  current_location: "San Francisco, California",
  headline: "Demo User for ConnectTheDots",
  about: "I love being the demo user for ConnectTheDots, a professional networking application!",
  pronouns: "she/her"
})

### attach User photos
giyu = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/giyu.png')
user1.photo.attach(io: giyu, filename: 'giyu.png')

gojo = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/gojo.jpg')
user2.photo.attach(io: gojo, filename: 'gojo.jpg')

itachi = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/itachi.png')
user3.photo.attach(io: itachi, filename: 'itachi.png')

jungkook = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/jungkook.jpg')
user4.photo.attach(io: jungkook, filename: 'jungkook.jpg')

killua = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/killua.jpg')
user5.photo.attach(io: killua, filename: 'killua.jpg')

### attach Demo User photo
tanjiro = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/tanjiro.jpg')
demo_user.photo.attach(io: tanjiro, filename: 'tanjiro.jpg')

### Posts
# User 1
post1 = Post.create({ body: "post1 by user1", user_id: 1 })
post2 = Post.create({ body: "post2 by user1", user_id: 1 })
post3 = Post.create({ body: "post3 by user1", user_id: 1 })

# User 2
post4 = Post.create({ body: "post1 by user2", user_id: 2 })
post5 = Post.create({ body: "post2 by user2", user_id: 2 })
post6 = Post.create({ body: "post3 by user2", user_id: 2 })

# User 3
post7 = Post.create({ body: "post1 by user3", user_id: 3 })
post8 = Post.create({ body: "post2 by user3", user_id: 3 })
post9 = Post.create({ body: "post3 by user3", user_id: 3 })

# Demo User's posts
post10 = Post.create({ body: "post1 by the demo user", user_id: 6 })
post11 = Post.create({ body: "post2 by the demo user", user_id: 6 })
post12 = Post.create({ body: "post3 by the demo user", user_id: 6 })

### attach Post photos
ny1 = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/ny1.jpg')
post1.photo.attach(io: ny1, filename: 'ny1.jpg')

ny2 = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/ny2.jpg')
post5.photo.attach(io: ny2, filename: 'ny2.jpg')

ny3 = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/ny3.jpg')
post9.photo.attach(io: ny3, filename: 'ny3.jpg')

ny4 = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/ny4.jpg')
post10.photo.attach(io: ny4, filename: 'ny4.jpg')

ny5 = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/ny5.jpg')
post12.photo.attach(io: ny5, filename: 'ny5.jpg')