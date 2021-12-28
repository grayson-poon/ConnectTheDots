class Api::CommentsController < ApplicationController
  def index
    @post = Post.find_by(id: params[:id])
    @comments = @post.comments.sort_by(&:created_at)
    @current_user = current_user
    
    render "api/comments/all_comments"
  end

  def show
    @comment = Comment.find_by(id: params[:id])

    if @comment
      render "api/comments/comment"
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render "api/comments/comment"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find_by(id: params[:comment][:id])

    if current_user.id == @comment.user_id
      if @comment.update(comment_params)
        render "api/comments/comment"
      else
        render json: @comment.errors.full_messages, status: 404
      end
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])

    if current_user.id == @comment.user_id
      @comment.destroy
      render "api/comments/comment"
    else
      render json: ["Comment could not be deleted"], status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id)
  end
end
