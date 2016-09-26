require 'rails_helper'

describe "the destroy an artist process" do
  it "destroys an artist", js: true do
    user = FactoryGirl.create(:user)
    login_as(user, :scope => :user)
    artist = FactoryGirl.create(:artist)
    visit new_artist_path
    find(artist.name).trigger('click')
    save_and_open_screenshot
    binding.pry
    click_on "Delete Artist"
    expect(page).to have_no_content artist.name
  end
end
