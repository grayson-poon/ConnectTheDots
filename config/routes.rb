Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :show, :update] do
      get '/activity', to: 'posts#user_activity'
      
      resources :connections, only: [:destroy, :index]
      post '/connections/:id', to: 'connections#create'
    end
    resources :posts, only: [:index, :create, :update, :destroy]
    # get '/users/:user_id/activity', to: 'posts#user_activity'
    # get '/users/:user_id/connections/:id', to: 'connections#create'
  end
end
