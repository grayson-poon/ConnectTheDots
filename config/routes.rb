Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:index, :create, :show, :update]
    get '/user_search', to: 'users#search'
    
    resources :posts, only: [:index, :create, :update, :destroy]
    get '/users/:user_id/activity', to: 'posts#activity'

    resources :connections, only: [:destroy]
    get '/users/:user_id/connections', to: 'connections#index'
    post '/connections/:id', to: 'connections#create'

    resources :comments, only: [:create, :show, :update, :destroy]
    get '/posts/:post_id/comments', to: 'comments#index'
  end
end
