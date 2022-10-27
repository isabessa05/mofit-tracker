class User < ApplicationRecord
    has_secure_password
    
    has_many :workouts
    has_many :workout_types, through: :user

    validates :username, :password, presence: true
    validates :username, uniqueness: true

end
