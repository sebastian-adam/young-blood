require 'rails_helper'

describe "the destroy an artist process" do
  it "destroys an artist", js: true do
    user = FactoryGirl.create(:user)
    login_as(user, :scope => :user)
    artist = FactoryGirl.create(:artist)
    visit new_artist_path
    click_on artist.name
    click_on "Delete Artist"
    expect(page).to have_no_content artist.name
  end
end
