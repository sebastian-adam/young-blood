class MusicVideo < ApplicationRecord
  belongs_to :story

  validates :title, presence: true, uniqueness: true
  validates :year, presence: true
  validates :link, presence: true
end
