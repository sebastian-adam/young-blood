Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, :controllers => { registrations: 'registrations' }

  root :to => 'artists#index'

  resources :artists do
    resources :music_videos
  end
end
