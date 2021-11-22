# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
User.create({
  email: "first@gmail.com",
  password: "password",
  first_name: "First",
  last_name: "First",
  pronouns: "he/his",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
  profile_picture: "www.test.com",
})

User.create({
  email: "second@gmail.com",
  password: "password",
  first_name: "Second",
  last_name: "Second",
  pronouns: "she/her",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
  profile_picture: "www.test.com",
})

User.create({
  email: "third@gmail.com",
  password: "password",
  first_name: "Third",
  last_name: "Third",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
  profile_picture: "www.test.com",
})

User.create({
  email: "fourth@gmail.com",
  password: "password",
  first_name: "Fourth",
  last_name: "Fourth",
  current_location: "San Francisco, California",
  headline: "Chef",
  about: "about",
})

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
  profile_picture: "www.test.com",
})