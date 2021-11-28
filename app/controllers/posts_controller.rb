class PostsController < ApplicationController

  def index
    # @posts = Post.select(*).where({ user_id: { current_user.id }})
  end

  def create
    @post = Post.new(post_params)
  end


  private

  def post_params
    params.require(:post).permit(:body, :user_id, :photo)
  end
end
