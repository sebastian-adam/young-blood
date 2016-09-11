class MusicVideo < ApplicationRecord
  belongs_to :artist

  validates :title, presence: true
  validates :year, presence: true
  validates :link, presence: true
end
