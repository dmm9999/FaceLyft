class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|

      t.integer :friender_id, null: false
      t.integer :friended_id, null: false
      t.boolean :accepted, default: false

      t.timestamps null: false
    end
    add_index :friendships, :friender_id
    add_index :friendships, :friended_id
  end
end
