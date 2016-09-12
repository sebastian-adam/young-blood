class AddVibeToArtist < ActiveRecord::Migration[5.0]
  def change
    add_column :artists, :vibe, :string
  end
end
