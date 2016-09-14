class AddAdditionalFeaturesToMusicVideo < ActiveRecord::Migration[5.0]
  def change
    add_column :music_videos, :featuring_2, :string
    add_column :music_videos, :featuring_3, :string
    add_column :music_videos, :featuring_4, :string
  end
end
