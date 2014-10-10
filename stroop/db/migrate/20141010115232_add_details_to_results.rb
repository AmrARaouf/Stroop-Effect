class AddDetailsToResults < ActiveRecord::Migration
  def change
    add_column :results, :match_correct, :integer
    add_column :results, :mismatch_correct, :integer
    rename_column :results, :match, :match_time
    rename_column :results, :mismatch, :mismatch_time
  end
end
