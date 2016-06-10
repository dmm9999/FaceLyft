class Like < ActiveRecord::Base

  validates :post_id, :liker_id, presence: true

end
