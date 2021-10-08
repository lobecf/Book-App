class UpdateSongs < ActiveRecord::Migration[6.1]
  def change
    remove_column :playlists, :name
    remove_column :playlists, :rating
    add_column :playlists, :songs, :string
  end
end
