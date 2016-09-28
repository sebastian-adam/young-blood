class ArtistsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :set_artist, only: [:show, :edit, :update, :destroy]

  def index
    @artists = Artist.order(:city).includes(:music_videos)
    respond_to do |format|
      format.html
      format.js
    end
  end

  def new
    @artists = Artist.order(:name)
    @artist = Artist.new
  end

  def create
    @artists = Artist.order(:name)
    @artist = Artist.new(artist_params)
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
