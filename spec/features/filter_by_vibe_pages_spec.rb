require 'rails_helper'

describe "the filter artist by vibe process" do
  it "filters the home page artists list" do
    artist = FactoryGirl.create(:artist)
    visit root_path
    expect(page).to have_content artist.name
    click_on "soul"
    expect(page).to have_no_content artist.name
    click_on "thump"
    expect(page).to have_content artist.name
  end
end
