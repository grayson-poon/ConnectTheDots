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
  first_name: "Giyu",
  last_name: "Tomioka",
  pronouns: "he/his",
  current_location: "Demon Slayer Corps",
  headline: "Water Hashira",
  about: "about",
})

# User 2
user2 = User.create({
  email: "second@gmail.com",
  password: "password",
  first_name: "Gojo",
  last_name: "Satoru",
  pronouns: "he/him",
  current_location: "Tokyo, Japan",
  headline: "Special Grade Sorcerer at Tokyo Jujutsu High",
  about: "about",
})

# User 3
user3 = User.create({
  email: "third@gmail.com",
  password: "password",
  first_name: "Itachi",
  last_name: "Uchiha",
  current_location: "Konoha",
  headline: "Hidden Leaf Shinobi",
  about: "about",
})

# User 4
user4 = User.create({
  email: "fourth@gmail.com",
  password: "password",
  first_name: "Jung-kook",
  last_name: "Jeon",
  current_location: "Seoul, Korea",
  headline: "Member of BTS",
  about: "about",
})

# User 5
user5 = User.create({
  email: "fifth@gmail.com",
  password: "password",
  first_name: "Killua",
  last_name: "Zoldyck",
  current_location: "Greed Island",
  headline: "Best friend of Gon Freecss",
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

user7 = User.create({
  email: "seventh@gmail.com",
  password: "password",
  first_name: "Zenitsu",
  last_name: "Agatsuma",
  current_location: "Demon Slayer Corps",
  headline: "Demon Slayer",
  about: "about",
})

user8 = User.create({
  email: "eighth@gmail.com",
  password: "password",
  first_name: "IU",
  last_name: "(Lee Ji-uen)",
  pronouns: "she/her",
  current_location: "Seoul, Korea",
  headline: "Singer-songwriter",
  about: "about",
})

user9 = User.create({
  email: "ninth@gmail.com",
  password: "password",
  first_name: "Ji-min",
  last_name: "Park",
  current_location: "Seoul, Korea",
  headline: "Member of BTS",
  about: "about",
})

user10 = User.create({
  email: "tenth@gmail.com",
  password: "password",
  first_name: "Kakashi",
  last_name: "Hatake",
  current_location: "Konoha",
  headline: "Hidden Leaf Jonin",
  about: "about",
})

user11 = User.create({
  email: "eleventh@gmail.com",
  password: "password",
  first_name: "Kyojuro",
  last_name: "Rengoku",
  current_location: "Demon Slayer Corps",
  headline: "Flame Hashira",
  about: "about",
})

user12 = User.create({
  email: "twelveth@gmail.com",
  password: "password",
  first_name: "Martin",
  last_name: "Garrix",
  current_location: "Amsterddam, Netherlands",
  headline: "DJ",
  about: "about",
})

user13 = User.create({
  email: "thirteenth@gmail.com",
  password: "password",
  first_name: "Minato",
  last_name: "Namikaze",
  current_location: "Konoha",
  headline: "Fourth Hokage",
  about: "about",
})

user14 = User.create({
  email: "Fourteenth@gmail.com",
  password: "password",
  first_name: "Nezuko",
  last_name: "Kamado",
  current_location: "Demon Slayer Corps",
  headline: "Demon Fighting for Humans ^_^",
  about: "about",
})

user15 = User.create({
  email: "Fifteenth@gmail.com",
  password: "password",
  first_name: "Nam-joon",
  last_name: "Kim",
  current_location: "Seoul, Korea",
  headline: "Member of BTS",
  about: "about",
})

user16 = User.create({
  email: "sixteenth@gmail.com",
  password: "password",
  first_name: "Sasuke",
  last_name: "Uchiha",
  current_location: "Konoha",
  headline: "Hidden Leaf Shinobi",
  about: "about",
})

user17 = User.create({
  email: "seventeenth@gmail.com",
  password: "password",
  first_name: "Peter",
  last_name: "Parker",
  current_location: "New York City, New York",
  headline: "Your friendly neighborhood Spider-Man",
  about: "about",
})

user18 = User.create({
  email: "eighteenth@gmail.com",
  password: "password",
  first_name: "Tae-hyung",
  last_name: "Kim",
  current_location: "Seoul, Korea",
  headline: "Member of BTS",
  about: "about",
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

zenitsu = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/zenitsu.jpg')
user7.photo.attach(io: zenitsu, filename: 'zenitsu.jpg')

iu = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/iu.png')
user8.photo.attach(io: iu, filename: 'iu.png')

jimin = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/jimin.png')
user9.photo.attach(io: jimin, filename: 'jimin.png')

kakashi = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/kakashi.png')
user10.photo.attach(io: kakashi, filename: 'kakashi.png')

kyojuro = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/kyojuro.jpg')
user11.photo.attach(io: kyojuro, filename: 'kyojuro.jpg')

martin_garrix = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/martin_garrix.jpeg')
user12.photo.attach(io: martin_garrix, filename: 'martin_garrix.jpeg')

minato = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/minato.jpg')
user13.photo.attach(io: minato, filename: 'minato.jpg')

nezuko = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/nezuko.png')
user14.photo.attach(io: nezuko, filename: 'nezuko.png')

rm = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/rm.jpeg')
user15.photo.attach(io: rm, filename: 'rm.jpeg')

sasuke = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/sasuke.jpg')
user16.photo.attach(io: sasuke, filename: 'sasuke.jpg')

spiderman = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/spiderman.jpg')
user17.photo.attach(io: spiderman, filename: 'spiderman.jpg')

v = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/v.png')
user18.photo.attach(io: v, filename: 'v.png')

### Posts
# Giyu
post1 = Post.create({ body: "post1 by user1", user_id: 1 })
post2 = Post.create({ body: "post2 by user1", user_id: 1 })
post3 = Post.create({ body: "post3 by user1", user_id: 1 })

# Gojo
post4 = Post.create({ body: "post1 by user2", user_id: 2 })
post5 = Post.create({ body: "post2 by user2", user_id: 2 })
post6 = Post.create({ body: "post3 by user2", user_id: 2 })

# Itachi
post7 = Post.create({ body: "post1 by user3", user_id: 3 })
post8 = Post.create({ body: "post2 by user3", user_id: 3 })
post9 = Post.create({ body: "post3 by user3", user_id: 3 })

# Demo User's posts
post10 = Post.create({ body: "post1 by the demo user", user_id: 6 })
post11 = Post.create({ body: "post2 by the demo user", user_id: 6 })
post12 = Post.create({ body: "post3 by the demo user", user_id: 6 })

# Spider-Man

post13 = Post.create({ body: "I'm Spider-Man!", user_id: 17 })
post14 = Post.create({ body: "Saving the world, no big deal.", user_id: 17 })
post15 = Post.create({ body: "Checkout my latest movie!", user_id: 17 })

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

spiderman_post_1 = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/spiderman_post_1.jpg')
post13.photo.attach(io: spiderman_post_1, filename: "spiderman_post_1.jpg")

spiderman_post_2 = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/spiderman_post_2.jpeg')
post14.photo.attach(io: spiderman_post_2, filename: "spiderman_post_2.jpeg")

spiderman_post_3 = URI.open('https://connect-the-dots-seeds.s3.us-west-1.amazonaws.com/spiderman_post_3.jpg')
post15.photo.attach(io: spiderman_post_3, filename: "spiderman_post_3.jpg")

### Connections
# mutuals
c1_2 = Connection.create({ user_id: 1, connection_id: 2, request_accepted: true })
c2_1 = Connection.create({ user_id: 1, connection_id: 6, request_accepted: true })

c1_3 = Connection.create({ user_id: 1, connection_id: 3, request_accepted: true })
c3_1 = Connection.create({ user_id: 3, connection_id: 1, request_accepted: true })

c1_4 = Connection.create({ user_id: 1, connection_id: 4, request_accepted: true })
c4_1 = Connection.create({ user_id: 4, connection_id: 1, request_accepted: true })

c1_5 = Connection.create({ user_id: 1, connection_id: 5, request_accepted: true })
c5_1 = Connection.create({ user_id: 5, connection_id: 1, request_accepted: true })

c1_6 = Connection.create({ user_id: 1, connection_id: 6, request_accepted: true })
c6_1 = Connection.create({ user_id: 6, connection_id: 1, request_accepted: true })

c2_6 = Connection.create({ user_id: 2, connection_id: 6, request_accepted: true })
c6_2 = Connection.create({ user_id: 6, connection_id: 2, request_accepted: true })

c3_6 = Connection.create({ user_id: 3, connection_id: 6, request_accepted: true })
c6_3 = Connection.create({ user_id: 6, connection_id: 3, request_accepted: true })

c4_6 = Connection.create({ user_id: 4, connection_id: 6, request_accepted: true })
c6_4 = Connection.create({ user_id: 6, connection_id: 4, request_accepted: true })

c5_6 = Connection.create({ user_id: 5, connection_id: 6, request_accepted: true })
c6_5 = Connection.create({ user_id: 6, connection_id: 5, request_accepted: true })

c6_7 = Connection.create({ user_id: 6, connection_id: 7, request_accepted: true })
c7_6 = Connection.create({ user_id: 7, connection_id: 6, request_accepted: true })

c6_8 = Connection.create({ user_id: 6, connection_id: 8, request_accepted: true })
c8_6 = Connection.create({ user_id: 8, connection_id: 6, request_accepted: true })

c6_9 = Connection.create({ user_id: 6, connection_id: 9, request_accepted: true })
c9_6 = Connection.create({ user_id: 9, connection_id: 6, request_accepted: true })

c6_10 = Connection.create({ user_id: 6, connection_id: 10, request_accepted: true })
c10_6 = Connection.create({ user_id: 10, connection_id: 6, request_accepted: true })

c6_11 = Connection.create({ user_id: 6, connection_id: 11, request_accepted: true })
c11_6 = Connection.create({ user_id: 11, connection_id: 6, request_accepted: true })

c6_12 = Connection.create({ user_id: 6, connection_id: 12, request_accepted: true })
c12_6 = Connection.create({ user_id: 12, connection_id: 6, request_accepted: true })

c6_13 = Connection.create({ user_id: 6, connection_id: 13, request_accepted: true })
c13_6 = Connection.create({ user_id: 13, connection_id: 6, request_accepted: true })

# requests
c14_6 = Connection.create({ user_id: 14, connection_id: 6 })
c15_6 = Connection.create({ user_id: 15, connection_id: 6 })
c16_6 = Connection.create({ user_id: 16, connection_id: 6 })
c17_6 = Connection.create({ user_id: 17, connection_id: 6 })
c18_6 = Connection.create({ user_id: 18, connection_id: 6 })