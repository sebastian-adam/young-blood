require 'rails_helper'

describe "the admin access path" do
  it "allows admin access to admin portal" do
    admin = FactoryGirl.create(:admin)
    login_as(admin, :scope => :user)
    visit rails_admin_path
    expect(page).to have_content "Dashboard"
  end

  it "does not allow non-admin user access to admin portal" do
    user = FactoryGirl.create(:user)
    login_as(user, :scope => :user)
    visit rails_admin_path
    expect(page).to have_content "You are not authorized to access this page"
  end

  it "does not allow non-user access to admin portal" do
    visit rails_admin_path
    expect(page).to have_content "You need to sign in or sign up before continuing"
  end
end
