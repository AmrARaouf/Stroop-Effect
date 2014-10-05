class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.float :match
      t.float :mismatch

      t.timestamps
    end
  end
end
