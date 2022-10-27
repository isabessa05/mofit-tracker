class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :date, :mood, :workout_type_id, :user_id, :duration

  belongs_to :workout_type
end
