class Workout < ApplicationRecord
    belongs_to :user
    belongs_to :workout_type

    validates :mood, :date, :workout_type_id, :user_id, :duration, presence: true
    validates :mood, inclusion: {in: ['good', 'energized', 'tired', 'neutral', 'exhausted'] }

end
