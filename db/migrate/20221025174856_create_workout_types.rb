class CreateWorkoutTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_types do |t|
      t.string :name
      t.integer :cals_per_hour

      t.timestamps
    end
  end
end
