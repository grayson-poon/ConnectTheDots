class Connection < ApplicationRecord
  validates :user_id, :connection_id, presence: true
  validates_uniqueness_of :connection_id, :scope => :user_id
  validates :request_accepted, inclusion: { in: [true, false] }

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :connection,
    primary_key: :id,
    foreign_key: :connection_id,
    class_name: :User

  # belongs_to :pending,
  #   primary_key: :id,
  #   foreign_key: :connection_id,
  #   class_name: :User
end
