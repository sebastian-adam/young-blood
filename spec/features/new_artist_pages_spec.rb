require 'rails_helper'

describe "the add an artist process" do
  it "creates an artist" do
    user = FactoryGirl.create(:user)
    login_as(user, :scope => :user)
    visit root_path
    click_on "submit"
    artist = FactoryGirl.build(:artist)
    fill_in 'Name', :with => artist.name
    fill_in 'City', :with => artist.city
    fill_in 'State', :with => artist.state
    select artist.vibe, from: "Vibe"
    click_on "Create Artist"
    expect(page).to have_content "New save"
  end

  it "fails if it's missing parameters" do
    user = FactoryGirl.create(:user)
    login_as(user, :scope => :user)
    visit root_path
    click_on "submit"
    expect(page).to have_content "New save"
  end
end
