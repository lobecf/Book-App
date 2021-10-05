class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Testing 12345!" }.to_json
  end

  get "/users" do
    { message: "Users found!" }.to_json
  end

  post "/users" do
    user = User.create(params)
    user.to_json
  end

end
