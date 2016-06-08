class Post < ActiveRecord::Base

  validates :body, :author_id, :profile_id, presence: true

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :profile,
    class_name: "User",
    foreign_key: :profile_id,
    primary_key: :id
end
