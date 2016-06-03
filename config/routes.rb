Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show]
    resources :users, only: [:show]
    resource :session, only: [:create, :destroy, :show]
  end

end
