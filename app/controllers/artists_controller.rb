class ArtistsController < ApplicationController
  before_action :set_artist, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
    if params[:vibe].present?
      @artists = Artist.where("vibe = ?", params[:vibe]).order(:city).includes(:music_videos)
      respond_to do |format|
        format.js
      end
    elsif params[:city].present?
      @artists = Artist.where("city = ?", params[:city]).order(:city).includes(:music_videos)
      respond_to do |format|
        format.js
      end
    elsif params[:year].present?
      @artists = Artist.joins(:music_videos).where(music_videos: {year: [params[:year]]}).order(:city).includes(:music_videos)
      respond_to do |format|
        format.js
      end
    else
      @artists = Artist.order(:city).includes(:music_videos)
    end
  end

  def new
    @artists = Artist.order(:name)
    @artist = Artist.new
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      flash[:success] = "New save"
      redirect_to new_artist_path
    else
      @artists = Artist.order(:city)
      flash.now[:alert] = "Error saving"
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @artist.update(artist_params)
      flash[:success] = "Changes saved"
      redirect_to artists_path
    else
      flash.now[:alert] = "Error saving"
      render :edit
    end
  end

  def destroy
    @artist.destroy
    redirect_to artists_path
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :city, :state, :vibe)
  end

  def set_artist
    @artist = Artist.find(params[:id])
  end
end
