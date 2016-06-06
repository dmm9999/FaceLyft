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

  def show
    @user = User.find(params[:id])
    render "api/users/show"
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
    @user = User.find(params[:id])
    @friends = @user.friends
  end

  private

  def user_params
    params.require(:user).permit(:id, :email_address, :password, :description, :hometown, :school, :work, :current_city, :phone_number, :birthday, :profile_pic, :coverpic)
  end

end
