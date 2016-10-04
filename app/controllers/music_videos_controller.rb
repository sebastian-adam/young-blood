class MusicVideosController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :set_artist
  before_action :set_music_video, only: [:show, :edit, :update, :destroy]

  def new
    @music_video = @artist.music_videos.new
    respond_to do |format|
      format.js
    end
  end

  def create
    @music_video = @artist.music_videos.new(music_video_params)
    @music_video.youtube_id = YoutubeID.from(@music_video.link)
    if @music_video.save
      respond_to do |format|
        format.js { flash.now[:success] = "Music video saved" }
      end
    else
      respond_to do |format|
        format.js { flash.now[:alert] = "Error saving music video" }
      end
    end
  end

  def show
    @artists = Artist.all
    respond_to do |format|
      format.js
    end
  end

  def edit
    respond_to do |format|
      format.js
    end
  end

  def update
    if @music_video.update(music_video_params)
      @music_video.youtube_id = YoutubeID.from(@music_video.link)
      @music_video.save
      respond_to do |format|
        format.js { flash.now[:success] = "Music video updated" }
      end
    else
      respond_to do |format|
        format.js { flash.now[:alert] = "Error updating music video" }
      end
    end
  end

  def destroy
    @music_video.destroy
    redirect_to edit_artist_path(@artist)
  end

  private

  def music_video_params
    params.require(:music_video).permit(:title, :artist_id, :featuring, :featuring_2, :featuring_3, :featuring_4, :year, :link)
  end

  def set_artist
    @artist = Artist.find(params[:artist_id])
  end

  def set_music_video
    @music_video = MusicVideo.find(params[:id])
  end
end
