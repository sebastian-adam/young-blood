require 'rails_helper'

describe MusicVideo do
  it { should validate_presence_of :title }
  it { should validate_presence_of :year }
  it { should validate_presence_of :link }
  it { should belong_to :artist }
end
