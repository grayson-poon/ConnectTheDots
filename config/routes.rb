Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :show, :update]
    resources :posts, only: [:index, :create, :update, :destroy]
    get '/users/:user_id/activity', to: 'posts#user_activity'
  end
end
