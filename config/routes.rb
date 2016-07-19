Rails.application.routes.draw do
	resources :records
	root 'records#index', :via => [:get, :post]
end
