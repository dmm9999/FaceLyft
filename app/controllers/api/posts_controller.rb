class Api::PostsController < ApplicationController

  def create
    @post = Post.create(author_id: current_user.id, profile_id: params[:profileId], body: params[:body])
    render json: @post
  end

  def index
    @posts = Post.where(profile_id: params[:user_id].to_i)
    render 'api/posts/index'
  end

end
