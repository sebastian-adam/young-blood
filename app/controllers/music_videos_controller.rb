class MusicVideosController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def new
    @artist = Artist.find(params[:artist_id])
    @music_video = @artist.music_videos.new
  end

  def create
    @artist = Artist.find(params[:artist_id])
    @music_video = @artist.music_videos.new(music_video_params)
    @music_video.youtube_id = YoutubeID.from(@music_video.link)
    if @music_video.save
      flash[:success] = "New save"
      redirect_to new_artist_path
    else
      flash.now[:alert] = "Error saving"
      render :new
    end
  end

  def show
  end

  def edit
    @artist = Artist.find(params[:artist_id])
    @music_video = MusicVideo.find(params[:id])
  end

  def update
    @artist = Artist.find(params[:artist_id])
    @music_video = MusicVideo.find(params[:id])
    if @music_video.update(music_video_params)
      @music_video.youtube_id = YoutubeID.from(@music_video.link)
      @music_video.save
      flash[:success] = "Changes saved"
      redirect_to artist_path(@artist)
    else
      flash.now[:alert] = "Error saving"
    end
  end

  def destroy
    @artist = Artist.find(params[:artist_id])
    @music_video = MusicVideo.find(params[:id])
    @music_video.destroy
    redirect_to artist_path(@artist)
  end

  private

  def music_video_params
    params.require(:music_video).permit(:title, :artist_id, :featuring, :featuring_2, :featuring_3, :featuring_4, :year, :link)
  end
end
