class MusicVideo < ApplicationRecord
  validates :title, presence: true
  validates :artist, presence: true
  validates :location, presence: true
  validates :year, presence: true
  validates :link, presence: true
end
