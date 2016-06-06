Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]

    get '/users/:id/friends', to: 'users#friends'
  end

end
