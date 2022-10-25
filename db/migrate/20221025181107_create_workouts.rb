class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.datetime :date
      t.string :mood
      t.integer :workout_type_id
      t.integer :user_id
      t.integer :duration

      t.timestamps
    end
  end
end
