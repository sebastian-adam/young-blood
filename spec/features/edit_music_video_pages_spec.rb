require 'rails_helper'

describe "the edit a music video process" do
  it "updates a music video", js: true do
    user = FactoryGirl.create(:user)
    login_as(user, :scope => :user)
    artist = FactoryGirl.create(:artist)
    music_video = FactoryGirl.create(:music_video)
    visit edit_artist_path(artist)
    click_on music_video.title
    fill_in 'Title', :with => "new title"
    fill_in 'Featuring', :with => "new featuring"
    fill_in 'Year', :with => "new year"
    fill_in 'Link', :with => "new link"
    click_on "Update Music video"
    expect(page).to have_content "Music video updated"
  end

  it "fails if it's missing parameters", js: true do
    user = FactoryGirl.create(:user)
    login_as(user, :scope => :user)
    artist = FactoryGirl.create(:artist)
    music_video = FactoryGirl.create(:music_video)
    visit edit_artist_path(artist)
    click_on music_video.title
    fill_in 'Title', :with => ""
    click_on "Update Music video"
    expect(page).to have_content "Error updating music video"
  end
end
