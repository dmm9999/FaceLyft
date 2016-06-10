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

    def self.find_by_ids(id1, id2)
      @friendship = Friendship.where(friender_id: id1).where(friended_id: id2)
      .concat(Friendship.where(friended_id: id1).where(friender_id: id2)).first
    end
end
