class CreateUserGenres < ActiveRecord::Migration[6.1]
  def change
    create_table :user_genres do |t|
      t.belongs_to :user
      t.string :genres
    end
  end
end
