class RemoveUniqueConstraintFromAuthorIdOnPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :author_id
    add_column :posts, :author_id, :integer
  end
end
