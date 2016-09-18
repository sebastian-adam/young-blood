require 'rails_helper'

describe Artist do
  it { should validate_presence_of :name }
  it { should validate_presence_of :city }
  it { should validate_presence_of :state }
  it { should validate_presence_of :vibe }
  it { should have_many :music_videos }
end
