require 'ffaker'

puts "🌱 Seeding spices..."

# Seed your database here

user1 = User.create(name: "test1", username: "tester1", email: "test1@test.com", password: "password")
user2 = User.create(name: "test2", username: "tester2", email: "test2@test.com", password: "password")

UserGenre.create(user: user1, genres: "Rock", goals: "Exercise,Ease Pain")
UserGenre.create(user: user1, genres: "Electronic", goals: "Party")
UserGenre.create(user: user1, genres: "Pop", goals: "Party,Wellness")
UserGenre.create(user: user1, genres: "Rap", goals: "Party,Exercise,Ease Pain")

500.times {
    music = FFaker::Music
    name = music.song
    genre = music.genre
    band = music.artist
    Song.create(genre: genre, name: name, band: band)
}
puts "✅ Done seeding!"
