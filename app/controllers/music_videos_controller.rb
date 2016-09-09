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

  def show
    @music_video = MusicVideo.find(params[:id])
  end

  def edit
    @music_video = MusicVideo.find(params[:id])
  end

  def update
    @music_video = MusicVideo.find(params[:id])
    @music_video.update(music_video_params)
    redirect_to music_videos_path(@music_video)
  end

  def destroy
    @music_video = MusicVideo.find(params[:id])
    @music_video.destroy
    redirect_to music_videos_path
  end

  private

  def music_video_params
    params.require(:music_video).permit(:title, :artist, :featuring, :location, :year, :link)
  end
end
