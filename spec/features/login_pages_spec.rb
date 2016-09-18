require 'rails_helper'

describe "the user login path" do
  it "logs in a user" do
    user = FactoryGirl.create(:user)
    visit root_path
    click_on "login"
    fill_in "Email", :with => user.email
    fill_in "user_password", :with => user.password
    click_button "Log in"
    expect(page).to have_content "Signed in successfully."
  end

  it "fails to login user if error" do
    visit new_user_session_path
    fill_in "Email", :with => "bad email"
    fill_in "user_password", :with => "bad password"
    click_button "Log in"
    expect(page).to have_content "Invalid Email or password"
  end
end
