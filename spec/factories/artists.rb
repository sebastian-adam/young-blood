FactoryGirl.define do
  factory :artist do
    name "Pete Rock"
    city "New York"
    state "NY"
    region "east"
    vibe "thump"
    id 100
    factory :artist_with_videos do
      transient do
        music_videos_count 2
      end
    end
  end
end
