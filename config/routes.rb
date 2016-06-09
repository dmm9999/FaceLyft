Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :update]
    resources :users, only: [:index, :show] do
      resources :posts, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:create, :destroy, :update, :show]

    get '/users/:id/friends', to: 'users#friends'
    post '/users/:id/friends', to: 'users#create_friendship'
    delete '/users/:id/friends', to: 'users#delete_friendship'
    get 'user/feed', to: 'users#feed'

  end

end
