Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
  
  root 'music_videos#index'

  resources :music_videos
end
