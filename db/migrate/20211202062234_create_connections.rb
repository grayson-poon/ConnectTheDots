class CreateConnections < ActiveRecord::Migration[5.2]
  def change
    create_table :connections do |t|
      t.integer :user_id, null: false
      t.integer :connection_id, null: false
      t.boolean :request_accepted, :default => false

      t.timestamps
    end

    add_index :connections, :user_id
    add_index :connections, :connection_id
    add_index :connections, [:connection_id, :user_id], unique: true
  end
end
