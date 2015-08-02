Rails.application.routes.draw do
  root 'comments#index'
  get 'comments/index'
end
