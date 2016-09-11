class ArtistsController < ApplicationController
  before_action :set_artist, only: [:show, :edit, :update, :destroy]

  def index
    @artists = Artist.order(:city)
  end

  def new
    @artist = Artist.new
  end

  def create
    if @artist = Artist.create(artist_params)
      flash[:success] = "New save"
      redirect_to artists_path
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
    if @artist.update(artist_params)
      flash[:success] = "Changes saved"
      redirect_to artists_path
    else
      flash.now[:alert] = "Error saving"
    end
  end

  def destroy
    @artist.destroy
    redirect_to artists_path
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :city, :state)
  end

  def set_artist
    @artist = Artist.find(params[:id])
  end
end
