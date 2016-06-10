Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :update] do
      resources :friendships, only: [:index]
    end
    resources :users, only: [:index, :show] do
      resources :posts, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:create, :destroy, :update, :show] do
      resources :likes, only: [:create, :destroy]
    end
    resources :friendships, only: [:update, :destroy]


    get '/users/:id/friends', to: 'users#friends'
    post '/users/:id/friends', to: 'users#create_friendship'
    delete '/users/:id/friends', to: 'users#delete_friendship'
    get 'user/feed', to: 'users#feed'
    get 'user/friend_requests', to: 'users#friend_requests'

  end

end
