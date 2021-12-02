class Api::PostsController < ApplicationController
  def index # get feed posts
    connections = Connection
      .select(:connection_id)
      .where("user_id = ? AND request_accepted = true", current_user.id)

    @posts = Post.where("user_id = ?", current_user.id)

    connections.each do |connection|
      @posts += Post.where("user_id = ?", connection.connection_id)
    end

    render "api/posts/index"
    # @comments = query for those posts' comments
  end

  def user_activity
    @posts = Post.where("user_id = ?", current_user.id)

    # post_commented_on = Post
    #   .joins(:comments)
    #   .where("user_id = ?", current_user.id)

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

      if @post.update(post_params)
        render "api/posts/post_details"
      else
        render json: @user.errors.full_messages, status: 302
      end
    end
  end

  def destroy
    @post = Post.find_by(id: params[:post][:id])

    if current_user.id == @post.user_id
      @post.destroy
      render "api/posts/post_delete"
    else
      render json: ["Post could not be removed"]
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :user_id, :photo)
  end
end
