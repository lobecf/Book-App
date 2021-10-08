class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :genre
      t.string :name
      t.string :band
    end
  end
end
