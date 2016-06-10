class Api::FriendshipsController < ApplicationController

  def index
    @friend_requests = Friendship.where(friended_id: current_user.id).where(accepted: false)
    render 'api/friendships/index'
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    render json: @friendship
  end

end
