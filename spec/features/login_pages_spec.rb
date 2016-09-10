require 'rails_helper'

feature 'User authentication' do
  background do
    user = create(:user)
  end
  scenario 'can log in from the index' do
    visit '/'
    expect(page).to_not have_content('CONTRIBUTE')

    click_link 'LOGIN'
    fill_in 'Email', with: 'mfdoom@gmail.com'
    fill_in 'Password', with: '123456'
    click_button 'Log in'

    expect(page).to have_content('Signed in successfully.')
    expect(page).to_not have_content('START REPPING')
    expect(page).to have_content('LOG OUT')
  end
end
