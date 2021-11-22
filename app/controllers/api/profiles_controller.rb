class Api::ProfilesController < ApplicationController
  def create
    @profile = Profile.new(profile_params)

    if @profile.save
      @user = User.find_by(id: @profile.user_id)
      login(@user)
      render "api/users/show"
    else
      flash.now[:errors] = @profile.errors.full_messages
    end
  end

  def update
    @profile = Profile.find_by(id: current_user.profile.id)

    
  end

  private

  def profile_params
    params.require(:profile).permit(
      :first_name,
      :last_name,
      :pronouns,
      :current_location, 
      :headline, 
      :about,
      :profile_picture,
      :user_id
    )
  end
end
