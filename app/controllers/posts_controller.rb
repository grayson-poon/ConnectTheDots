class PostsController < ApplicationController
  def index # get feed posts
    @posts = Post.select(*).where("user_id = ?", current_user.id)
  end

  def user_activity
    # @posts = Post.select(*).where(user has commented on or created)
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render "api/posts/details"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find_by(id: params[:post][:id])

    if current_user.id == @post.id
      @post.photo.purge if params[:post][:photo].nil?

      if @post.update(post_params)
        render "api/posts/details"
      else
        render json: @user.errors.full_messages, status: 302
      end
    end
  end

  def destroy
    @post = Post.find_by(id: params[:post][:id])

    if current_user.id == @post.user_id
      @post.destroy
      # render "api/posts/details"
      render json: ["Successfully deleted"]
    else
      render json: ["Post could not be removed"]
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :user_id, :photo)
  end
end
