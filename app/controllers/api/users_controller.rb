class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      flash.now[:errors] = @user.errors.full_messages
      # render :new
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    # @profile = user.profile

    render 'api/users/show'
  end

  def update
    @user = User.find_by(id: params[:id])

    # @user.update(user_params)

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
