class UpdateUserGenres < ActiveRecord::Migration[6.1]
  def change
    add_column :user_genres, :goals, :string
  end
end
