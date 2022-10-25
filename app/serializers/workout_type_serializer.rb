class WorkoutTypeSerializer < ActiveModel::Serializer
  attributes :id, :name, :cals_per_hour
end
