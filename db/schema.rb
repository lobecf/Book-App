# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_08_142023) do

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "genre"
    t.string "author"
  end

  create_table "goals", force: :cascade do |t|
    t.string "name"
    t.string "desc"
  end

  create_table "playlists", force: :cascade do |t|
    t.integer "user_id"
    t.integer "goal_id"
    t.string "songs"
    t.index ["goal_id"], name: "index_playlists_on_goal_id"
    t.index ["user_id"], name: "index_playlists_on_user_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "genre"
    t.string "name"
    t.string "band"
  end

  create_table "user_genres", force: :cascade do |t|
    t.integer "user_id"
    t.string "genres"
    t.string "goals"
    t.index ["user_id"], name: "index_user_genres_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password"
  end

end
