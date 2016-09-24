class ArtistsController < ApplicationController
  before_action :set_artist, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
    if params[:vibe].present? && params[:region].present? && params[:year].present?
      @vibe = params[:vibe]
      @region = params[:region]
      @year = params[:year]
      @artists = Artist.where("vibe = ?", @vibe).where("region = ?", @region).joins(:music_videos).where(music_videos: {year: [@year]}).order(:city).includes(:music_videos)
      respond_to do |format|
        format.js
      end
    elsif params[:vibe].present? && params[:region].present?
      @vibe = params[:vibe]
      @region = params[:region]
      @artists = Artist.where("vibe = ?", @vibe).where("region = ?", @region).order(:city).includes(:music_videos)
      respond_to do |format|
        format.js
      end
    elsif params[:vibe].present? && params[:year].present?
      @vibe = params[:vibe]
      @year = params[:year]
      @artists = Artist.where("vibe = ?", @vibe).joins(:music_videos).where(music_videos: {year: [@year]}).order(:city).includes(:music_videos)
      respond_to do |format|
        format.js
      end
    elsif params[:region].present? && params[:year].present?
      @region = params[:region]
      @year = params[:year]
      @artists = Artist.where("region = ?", @region).joins(:music_videos).where(music_videos: {year: [@year]}).order(:city).includes(:music_videos)
      respond_to do |format|
        format.js
      end
    elsif params[:vibe].present?
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
    @artists = Artist.order(:name)
    if @artist.save
      respond_to do |format|
        format.js { flash.now[:success] = "Artist saved" }
      end
    else
      respond_to do |format|
        format.js { flash.now[:alert] = "Error saving artist" }
      end
    end
  end

  def show
  end

  def edit
  end

  def update
    if @artist.update(artist_params)
      respond_to do |format|
        format.js { flash.now[:success] = "Artist updated" }
      end
    else
      respond_to do |format|
        format.js { flash.now[:alert] = "Error updating artist" }
      end
    end
  end

  def destroy
    @artist.destroy
    redirect_to new_artist_path
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :city, :state,:region, :vibe)
  end

  def set_artist
    @artist = Artist.find(params[:id])
  end
end
