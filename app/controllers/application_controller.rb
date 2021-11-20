class ApplicationController < ActionController::Base
  helper_method :logged_in?, :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    if !logged_in?
      # redirect_to new_session_url
    end
  end

  def login(user) 
    new_token = user.reset_session_token!
    session[:session_token] = new_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    current_user.nil ? false : true
  end

end
