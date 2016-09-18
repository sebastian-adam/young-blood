require 'rails_helper'

describe Artist do
  validates_presence_of :name, :city, :state, :vibe
  has_many :music_videos
end
