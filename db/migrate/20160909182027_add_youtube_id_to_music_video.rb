class AddYoutubeIdToMusicVideo < ActiveRecord::Migration[5.0]
  def change
    add_column :music_videos, :youtube_id, :string
  end
end
