class MusicVideosController < ApplicationController
  def index
    @music_videos = MusicVideo.order(:location)
  end
  def new
    @music_video = MusicVideo.new
  end
  def create
    @music_video = MusicVideo.create(music_video_params)
    redirect_to music_videos_path
  end

  private

  def music_video_params
    params.require(:music_video).permit(:title, :artist, :location, :year, :link)
  end
end
