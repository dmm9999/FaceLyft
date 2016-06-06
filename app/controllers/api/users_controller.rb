class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      @errors = @user.errors
      render json: @errors, status: 422
      # render "api/shared/error", status: 422
    end
  end

  def update
    @user = current_user

    if @user.update(user_params)
      render "api/users/show"
    else
      @errors = @user.errors
      render json: @errors, status: 422
    end
  end

  def friends
    @user = User.find_by_id(params[:id])
    @friends = @user.friender_friends + @user.friended_friends
  end

  private

  def user_params
    params.require(:user).permit(:email_address, :password, :description, :hometown, :school, :work, :current_city, :phone_number, :birthday)
  end

end
