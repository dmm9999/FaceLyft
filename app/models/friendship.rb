class Friendship < ActiveRecord::Base

  validates :friender_id, :friended_id, presence: true

  belongs_to :friender_user,
    class_name: "User",
    foreign_key: :friender_id,
    primary_key: :id

  belongs_to :friended_user,
    class_name: "User",
    foreign_key: :friended_id,
    primary_key: :id

end
