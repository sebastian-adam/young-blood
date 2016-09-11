class Artist < ApplicationRecord
  has_many :music_videos

  validates :name, presence: true, uniqueness: true
  validates :city, presence: true
  validates :state, presence: true
end