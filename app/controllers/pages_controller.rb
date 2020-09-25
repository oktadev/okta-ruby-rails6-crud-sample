class PagesController < ApplicationController
  before_action :user_is_logged_in?, except: :home

  def home
    puts(session[:oktastate])
    @current_user = User.find_by(uid: session[:oktastate])
  end

  def account
    @current_user = User.find_by(uid: session[:oktastate])
    puts(session[:oktastate])
  end
end