require 'rails_helper'

describe "the add a music video process" do
  it "creates a music video", js: true do
    user = FactoryGirl.create(:user)
    login_as(user, :scope => :user)
    artist = FactoryGirl.create(:artist)
    visit root_path
    click_on "submit"
    click_on artist.name
    music_video = FactoryGirl.build(:music_video)
    fill_in 'Title', :with => music_video.title
    fill_in 'Featuring', :with => music_video.featuring
    fill_in 'Year', :with => music_video.year
    fill_in 'Link', :with => music_video.link
    click_on "Create Music video"
    expect(page).to have_content "Music video saved"
  end

  it "fails if it's missing parameters", js: true do
    user = FactoryGirl.create(:user)
    login_as(user, :scope => :user)
    artist = FactoryGirl.create(:artist)
    visit root_path
    click_on "submit"
    click_on artist.name
    click_on "Create Music video"
    expect(page).to have_content "Error saving music video"
  end
end
