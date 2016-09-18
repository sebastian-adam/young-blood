require 'rails_helper'

describe "the new user sign up path" do
  it "creates a new user" do
    user = FactoryGirl.build(:user)
    visit root_path
    click_on "join"
    fill_in "Email", :with => user.email
    fill_in "User name", :with => user.user_name
    fill_in "user_password", :with => user.password
    fill_in "user_password_confirmation", :with => user.password
    click_button "Sign up"
    expect(page).to have_content "Welcome! You have signed up successfully."
  end

  it "fails to create new user if fields are blank" do
    visit new_user_registration_path
    click_button "Sign up"
    expect(page).to have_content "Please review the problems below:"
  end
end
