class Post < ApplicationRecord
  belongs_to :user

  validates :body, :user_id, presence: true

  has_one_attached :photo

end
