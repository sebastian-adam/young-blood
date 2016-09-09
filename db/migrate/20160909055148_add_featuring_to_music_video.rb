class AddFeaturingToMusicVideo < ActiveRecord::Migration[5.0]
  def change
    add_column :music_videos, :featuring, :string
  end
end
