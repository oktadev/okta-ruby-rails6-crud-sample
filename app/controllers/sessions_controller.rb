class SessionsController < ApplicationController
  def new
  end

  def create
  end

  def destroy
    session[:oktastate] = nil
    @current_user = session[:oktastate]
    @session = session[:oktastate]
    redirect_to root_path
  end
end