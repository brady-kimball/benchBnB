class AddSeatingToBenchesTable < ActiveRecord::Migration[5.0]
  def change
    add_column :benches, :seating, :integer, null: false
  end
end
