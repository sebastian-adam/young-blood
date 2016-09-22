class ArtistsController < ApplicationController
  before_action :set_artist, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
    if params[:vibe].present?
      @vibe = params[:vibe]
      @artists = Artist.where("vibe = ?", @vibe).order(:city).includes(:music_videos)
      respond_to do |format|
        format.js
      end
    elsif params[:city].present?
      @city = params[:city]
      @artists = Artist.where("city = ?", @city).order(:city).includes(:music_videos)
      respond_to do |format|
        format.js
      end
    elsif params[:region].present?
      @region = params[:region]
      @artists = Artist.where("region = ?", @region).order(:city).includes(:music_videos)
      respond_to do |format|
        format.js
      end
    elsif params[:year].present?
      @year = params[:year]
      @artists = Artist.joins(:music_videos).where(music_videos: {year: [@year]}).order(:city).includes(:music_videos)
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
    params.require(:artist).permit(:name, :city, :state,:region, :vibe)
  end

  def set_artist
    @artist = Artist.find(params[:id])
  end
end
