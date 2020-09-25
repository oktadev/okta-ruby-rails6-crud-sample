class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
    def user_is_logged_in?
      if !session[:oktastate]
        print("user is not logged in")
        redirect_to user_oktaoauth_omniauth_authorize_path
      end
    end
  
    def after_sign_in_path_for(resource)
      request.env['omniauth.origin'] || root_path
    end
  
  end
  