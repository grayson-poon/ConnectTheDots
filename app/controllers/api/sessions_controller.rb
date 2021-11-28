class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      @user.reset_session_token!
      login(@user)

      # @connected_users
      # @posts

      render "/api/users/show"
    else
      render json: ["Invalid email or password. Please try again"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      # render "api/splash"
    else
      render json: ["Not signed in"], status: 404
    end
  end
end
