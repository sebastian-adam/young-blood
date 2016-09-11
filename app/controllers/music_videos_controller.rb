class MusicVideosController < ApplicationController

  def new
    @artist = Artists.find(params[:id])
    @music_video = MusicVideo.new
  end

  def create
    @artist = Artists.find(params[:id])
    if @music_video = MusicVideo.create(music_video_params)
      @music_video.youtube_id = YoutubeID.from(@music_video.link)
      @music_video.save
      flash[:success] = "New save"
      redirect_to music_videos_path
    else
      flash.now[:alert] = "Error saving"
      render :new
    end
  end

  def edit
    @music_video = MusicVideo.find(params[:id])
  end

  def update
    @music_video = MusicVideo.find(params[:id])
    if @music_video.update(music_video_params)
      @music_video.youtube_id = YoutubeID.from(@music_video.link)
      @music_video.save
      flash[:success] = "Changes saved"
      redirect_to music_videos_path
    else
      flash.now[:alert] = "Error saving"
    end
  end

  def destroy
    @music_video = MusicVideo.find(params[:id])
    @music_video.destroy
    redirect_to music_videos_path
  end

  private

  def music_video_params
    params.require(:music_video).permit(:title, :artist_id, :featuring, :year, :link)
  end
end
