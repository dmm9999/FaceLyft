  class Api::PostsController < ApplicationController

  def create
    @post = Post.create(body: create_post_params[:body], profile_id: create_post_params[:profile_id], author_id: current_user.id)
    render 'api/posts/show'
  end

  def index
    @posts = Post.where(profile_id: params[:user_id].to_i)
    render 'api/posts/index'
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: @post
  end

  private

  def create_post_params
    params.require(:user).permit(:profile_id, :body)
  end

  def update_post_params
    params.require(:user).permit(:body)
  end

end
