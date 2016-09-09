class MusicVideosController < ApplicationController
  before_action :set_music_video, only: [:show, :edit, :update, :destroy]

  def index
    @music_videos = MusicVideo.order(:location)
  end

  def new
    @music_video = MusicVideo.new
  end

  def create
    if @music_video = MusicVideo.create(music_video_params)
      flash[:success] = "New save"
      redirect_to music_videos_path
    else
      flash.now[:alert] = "Error saving"
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @music_video.update(music_video_params)
      flash[:success] = "Changes saved"
      redirect_to music_videos_path
    else
      flash.now[:alert] = "Error saving"
    end
  end

  def destroy
    @music_video.destroy
    redirect_to music_videos_path
  end

  private

  def music_video_params
    params.require(:music_video).permit(:title, :artist, :featuring, :location, :year, :link)
  end

  def set_music_video
    @music_video = MusicVideo.find(params[:id])
  end
end
