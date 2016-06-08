class AddProfileIdToPosts < ActiveRecord::Migration
  def change

    add_column :posts, :profile_id, :integer, null: false

  end
end
