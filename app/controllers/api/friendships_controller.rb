class Api::FriendshipsController < ApplicationController

  def index
    @friend_requests = Friendship.where(friended_id: current_user.id).where(accepted: false)
    render 'api/friendships/index'
  end

  def update
    @friend_request = Friendship.find(params[:id])
    @friend_request.accepted = true
    @friend_request.save
    render json: @friend_request
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    render json: @friendship
  end

end
