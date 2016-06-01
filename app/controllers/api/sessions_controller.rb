class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email_address],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      @errors
    end

  end

end
