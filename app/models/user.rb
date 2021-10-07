class User < ActiveRecord::Base
    has_many :playlists
    has_many :user_genres
end