class AddArtistIdToMusicVideo < ActiveRecord::Migration[5.0]
  def change
    add_column :music_videos, :artist_id, :integer
  end
end
