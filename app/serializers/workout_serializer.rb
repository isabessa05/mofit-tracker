class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :date, :mood, :workout_type_id, :user_id, :duration
end
