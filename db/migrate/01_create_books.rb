class CreateBooks < ActiveRecord::Migration[6.1]
    def change
      create_table :books do |t|
        t.string :title
        t.string :genre
        t.string :author
      end
    end
  end