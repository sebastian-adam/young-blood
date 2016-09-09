class CreateMusicVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :music_videos do |t|
      t.string :title
      t.string :artist
      t.string :location
      t.string :year
      t.string :link

      t.timestamps
    end
  end
end
