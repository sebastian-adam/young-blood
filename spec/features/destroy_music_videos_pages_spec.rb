require 'rails_helper'

describe "the destroy a music video process" do
  it "destroys a music video" do
    user = FactoryGirl.create(:user)
    login_as(user, :scope => :user)
    artist = FactoryGirl.create(:artist)
    music_video = FactoryGirl.create(:music_video)
    visit edit_artist_path(artist)
    click_on "x"
    expect(page).to have_no_content music_video.title
  end
end
