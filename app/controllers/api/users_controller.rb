class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render "api/users/show"
    else
      render json: ["User not found"], status: 404
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if current_user.id == @user.id
      if @user.update(user_params)
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 302
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :password,
      :first_name,
      :last_name,
      :pronouns,
      :current_location, 
      :headline, 
      :about,
      :profile_picture,
    )
  end
end
