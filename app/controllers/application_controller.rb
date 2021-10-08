class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Testing 12345!" }.to_json
  end

  get "/users" do
    User.all.to_json
  end

  get "/users/:id" do
    user = User.find(params[:id])
    user.to_json
  end

  post "/users" do
    user = User.create(params)
    user.to_json
  end

  get "/user_genres" do
    UserGenre.all.to_json
  end

  get "/user_genres/:id" do
    user = User.find(params[:id])
    user.user_genres.to_json
  end

  post "/user_genres" do
    genres = UserGenre.create(params)
    genres.to_json
  end

  get "/songs" do
    Song.all.to_json
  end

  get "/songs/:genre" do
    genre = params[:genre]
    if genre == "Pop" then
      genre = "Pop/Rock"
    end
    songs = Song.all.filter {|song| song.genre === genre}
    songs.sample(5).to_json
  end

  get "/playlists/:id" do
    list = User.find(params[:id])
    list.playlists.to_json
  end

  # post "/playlists/:id" do
  #   user = User.find(params[:id])
  #   list = Playlist.create(user: user, goal: params[goal], songs: params[songs])
  #   list.playlists.to_json
  # end

  post "/playlists" do
    user = User.find(params[:id])
    playlist = user.playlists.filter {|list| list.goal === params[:goal]}
    if playlist then
      list = playlist.update(user: user, goal: params[:goal], songs: params[:songs])
      list.playlists.to_json
    else
      list = Playlist.create(user: user, goal: params[:goal], songs: params[:songs])
      list.playlists.to_json
    end
  end

end
