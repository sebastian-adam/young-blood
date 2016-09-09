Rails.application.routes.draw do
  root 'music_videos#index'

  resources :music_videos
end
