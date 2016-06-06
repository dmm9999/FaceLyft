Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :update]
    resources :users, only: [:show]
    resource :session, only: [:create, :destroy, :show]

    get '/users/:id/friends', to: 'users#friends'
  end

end
