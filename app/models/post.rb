class Post < ApplicationRecord
  validates :body, :user_id, presence: true
  
  belongs_to :user
  has_one_attached :photo
  has_many :comments, dependent: :destroy

  has_many :commented_users, -> { distinct },
    through: :comments,
    source: :user
end
