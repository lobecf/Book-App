puts "🌱 Seeding spices..."

# Seed your database here

user1 = User.create(name: "test1", username: "tester1", email: "test1@test.com", password: "password")
user2 = User.create(name: "test2", username: "tester2", email: "test2@test.com", password: "password")

UserGenres.create(user: user1, genres: "acoustic%2Ccountry%2Cclassical", goals: "focus wellness")
puts "✅ Done seeding!"
