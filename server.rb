require 'sinatra'

get '/' do
	erb :index
end

get '/rules' do
	erb :rules
end

