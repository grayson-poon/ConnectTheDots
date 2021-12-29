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
    @current_user = current_user
    @user = User.find_by(id: params[:id])

    if @user
      render "api/users/show"
    else
      render json: ["User not found"], status: 404
    end
  end

  def update
    @user = User.find_by(id: params[:user][:id])

    if current_user.id == @user.id
      @user.photo.purge if params[:user][:photo].nil?
      params[:user][:photo] = @user.photo if params[:user][:photo].is_a?(String)

      if @user.update(user_params)
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 302
      end
    end
  end

  def search
    @current_user = current_user
    
    if params[:search_value].length == 0
      render json: { users: [] }
    else
      @users = User.where(
        "lower(first_name) LIKE ? OR lower(last_name) LIKE ?", 
        "%#{params[:search_value].downcase}%",
        "%#{params[:search_value].downcase}%"
      )
      render "api/users/search_results"
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
      :photo,
    )
  end
end
