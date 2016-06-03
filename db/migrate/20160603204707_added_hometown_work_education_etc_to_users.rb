class AddedHometownWorkEducationEtcToUsers < ActiveRecord::Migration
  def change
    add_column :users, :hometown, :string
    add_column :users, :work, :string
    add_column :users, :school, :string
    add_column :users, :current_city, :string
    add_column :users, :phone_number, :integer
    add_column :users, :birthday, :date
  end
end
