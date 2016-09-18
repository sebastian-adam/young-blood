FactoryGirl.define do
  factory :artist do
    name "Pete Rock"
    city "New York"
    state "NY"
    vibe "thump"
    factory :artist_with_videos do
      transient do
        music_videos_count 2
      end
    end
  end
end
