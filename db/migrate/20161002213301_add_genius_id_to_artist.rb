class AddGeniusIdToArtist < ActiveRecord::Migration[5.0]
  def change
    add_column :artists, :genius_id, :integer
  end
end
