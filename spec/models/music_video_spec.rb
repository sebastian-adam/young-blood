require 'rails_helper'

describe MusicVideo do
  it { should validate_presence_of :title }
  it { should validate_presence_of :artist }
  it { should validate_presence_of :location }
  it { should validate_presence_of :year }
  it { should validate_presence_of :title }
end
