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

  get "/user_goals" do
    UserGenres.all.to_json
  end

  post "/user_goals" do
    console.log(params)
  end

end
