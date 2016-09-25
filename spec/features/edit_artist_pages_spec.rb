require 'rails_helper'

describe "the edit an artist process" do
  it "updates an artist", js: true do
    user = FactoryGirl.create(:user)
    login_as(user, :scope => :user)
    artist = FactoryGirl.create(:artist)
    visit edit_artist_path(artist)
    fill_in 'Name', :with => "new name"
    fill_in 'City', :with => "new city"
    fill_in 'State', :with => "new state"
    select 'midwest', from: "Region"
    select "soul", from: "Vibe"
    click_on "Update Artist"
    expect(page).to have_content "Artist updated"
  end

  it "fails if it's missing parameters", js: true do
    user = FactoryGirl.create(:user)
    login_as(user, :scope => :user)
    artist = FactoryGirl.create(:artist)
    visit edit_artist_path(artist)
    fill_in 'Name', :with => ""
    click_on "Update Artist"
    expect(page).to have_content "Error updating artist"
  end
end
