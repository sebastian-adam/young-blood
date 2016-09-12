class RemoveGenreFromMusicVideo < ActiveRecord::Migration[5.0]
  def change
    remove_column :music_videos, :genre, :string
  end
end
