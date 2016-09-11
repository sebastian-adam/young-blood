Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }

  root 'artists#index'

  resources :artists do
    resources :music_videos
  end
end
