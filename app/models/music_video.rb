class MusicVideo < ApplicationRecord
  belongs_to :artist

  validates :title, presence: true, uniqueness: true
  validates :year, presence: true
  validates :link, presence: true
end
