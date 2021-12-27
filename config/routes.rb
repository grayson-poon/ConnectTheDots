Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:index, :create, :show, :update] do
      get '/activity', to: 'posts#user_activity'
    end
    
    resources :posts, only: [:index, :create, :update, :destroy]

    resources :connections, only: [:destroy]
    get '/connections/:id', to: 'connections#index'
    post '/connections/:id', to: 'connections#create'

    resources :comments, only: [:create, :update, :destroy]
    get '/comments/:id', to: 'comments#index'
    get '/single_comment/:id', to: 'comments#show'

    # get '/users/:user_id/activity', to: 'posts#user_activity'
    # get '/users/:user_id/connections/:id', to: 'connections#create'
  end
end
