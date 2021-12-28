Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:index, :create, :show, :update]
    
    resources :posts, only: [:index, :create, :update, :destroy]
    get '/users/:user_id/activity', to: 'posts#activity'

    resources :connections, only: [:destroy]
    get '/connections/:id', to: 'connections#index'
    post '/connections/:id', to: 'connections#create'

    resources :comments, only: [:create, :update, :destroy]
    get '/comments/:id', to: 'comments#index'
    get '/single_comment/:id', to: 'comments#show'
  end
end
