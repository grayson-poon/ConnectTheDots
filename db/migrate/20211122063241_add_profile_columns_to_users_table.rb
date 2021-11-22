class AddProfileColumnsToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :pronouns, :string
    add_column :users, :current_location, :string, null: false
    add_column :users, :headline, :string, null: false
    add_column :users, :about, :text
    add_column :users, :profile_picture, :string
    add_index :users, :first_name
    add_index :users, :last_name
  end
end
