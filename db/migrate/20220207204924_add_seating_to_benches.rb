class AddSeatingToBenches < ActiveRecord::Migration[5.2]
  def change
    add_column :benches, :num_seats, :integer
  end
end
