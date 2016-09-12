class AddGenreToSong < ActiveRecord::Migration[5.0]
  def change
    add_column :music_videos, :genre, :string
  end
end
