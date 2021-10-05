class PlaylistController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # Add your routes here
    get "/playlists" do
      { message: "Testing 12345!" }.to_json
    end
  
  end