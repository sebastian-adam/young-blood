class AddRegionToArtist < ActiveRecord::Migration[5.0]
  def change
    add_column :artists, :region, :string
  end
end
