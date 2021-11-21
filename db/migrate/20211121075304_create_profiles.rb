class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :pronouns
      t.string :current_location, null: false
      t.string :headline, null: false
      t.text :about
      t.string :profile_picture
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :profiles, :first_name
    add_index :profiles, :last_name
    add_index :profiles, :user_id, unique: true
  end
end
