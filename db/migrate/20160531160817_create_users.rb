class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|

      t.string :email_address, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps null: false
    end
    add_index :users, :email_address, unique: true
    add_index :users, :session_token, unique: true
  end
end
