puts "🌱 Seeding spices..."

# Seed your database here

User.create(name: "test1", username: "tester1", email: "test1@test.com", password: "password")
User.create(name: "test2", username: "tester2", email: "test2@test.com", password: "password")

puts "✅ Done seeding!"
