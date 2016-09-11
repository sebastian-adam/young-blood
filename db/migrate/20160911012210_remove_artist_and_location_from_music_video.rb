class RemoveArtistAndLocationFromMusicVideo < ActiveRecord::Migration[5.0]
  def change
    remove_column :music_videos, :artist, :string
    remove_column :music_videos, :location, :string
  end
end
