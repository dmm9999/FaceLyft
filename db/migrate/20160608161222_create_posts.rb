class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|

      t.text :body, null: false
      t.integer :author_id, null: false

      t.timestamps null: false
    end
    add_index :posts, :author_id, unique: true
  end
end
