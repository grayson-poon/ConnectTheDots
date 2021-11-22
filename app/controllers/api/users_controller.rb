class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render json: ["success"]
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render 'api/users/show'
  end

  def update
    @user = User.find_by(id: params[:id])

    if current_user.id == @user.id
      if @user.update(user_params)
        render 'api/users/show'
      else
        puts "fail"
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
