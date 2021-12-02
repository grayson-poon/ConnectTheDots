class Connection < ApplicationRecord
  validates :user_id, :connection_id, presence: true
  validates_uniqueness_of :connection_id, :scope => :user_id
  validates :request_accepted, inclusion: { in: [true, false] }

  belongs_to :user
end
