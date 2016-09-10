require 'rails_helper'

feature 'Creating a new user' do
  background do
    visit '/'
    click_link 'START REPPING'
  end
  scenario 'can create a new user via the index page' do
    fill_in 'User name', with: 'fakeuser'
    fill_in 'Email', with: 'fakeuser@gmail.com'
    fill_in 'Password', with: '123456', match: :first
    fill_in 'Password confirmation', with: '123456'

    click_button 'Sign up'
    expect(page).to have_content('Welcome! You have signed up successfully.')
  end
end
