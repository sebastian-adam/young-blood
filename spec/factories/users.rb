FactoryGirl.define do
  factory :user do
    email 'mfdoom@gmail.com'
    user_name 'MFDOOM'
    password '123456'
    id 1
    factory :admin do
      admin true
    end
  end
end
