class WorkoutType < ApplicationRecord
    has_many :workouts
    has_many :users, through: :workouts

    validates :name, :cals_per_hour, presence: true
end
