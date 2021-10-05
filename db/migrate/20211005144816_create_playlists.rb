class CreatePlaylists < ActiveRecord::Migration[6.1]
  def change
    create_table :playlists do |t|
      t.string :name
      t.integer :rating
      t.belongs_to :user
      t.belongs_to :goal
    end
  end
end
