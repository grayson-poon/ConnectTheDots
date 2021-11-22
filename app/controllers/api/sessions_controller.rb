class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      @user.reset_session_token!
      login(@user)
      render "/api/users/show"
    else
      render json: ["Invalid username or password. Please try again"]
    end
  end

  def destroy
    logout
    # render json: {}
  end
end
