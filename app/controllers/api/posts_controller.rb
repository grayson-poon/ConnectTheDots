class Api::PostsController < ApplicationController
  def index
    @user = current_user
    posts = @current_user.posts

    @user.connected_users.each do |user|
      posts += user.posts
    end

    @posts = posts.sort_by(&:created_at)
    render "api/posts/index"
  end

  def activity
    @user = User.find_by(id: params[:user_id])
    @posts = (@user.posts + @user.posts_commented_on).sort_by(&:created_at)

    render "api/posts/index"
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render "api/posts/post_details"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find_by(id: params[:post][:id])
    
    if current_user.id == @post.user_id
      @post.photo.purge if params[:post][:photo].nil?
      params[:post][:photo] = @post.photo if params[:post][:photo].is_a?(String)

      if @post.update(post_params)
        render "api/posts/post_details"
      else
        render json: @post.errors.full_messages, status: 404
      end
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])

    if current_user.id == @post.user_id
      @post.destroy
      render "api/posts/post_delete"
    else
      render json: ["Post could not be removed"], status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :user_id, :photo)
  end
end
