Rails.application.routes.draw do
  resources :workouts
  resources :workout_types
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
end
