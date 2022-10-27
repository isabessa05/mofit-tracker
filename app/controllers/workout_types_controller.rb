class WorkoutTypesController < ApplicationController

    def index 
        workouttype = WorkoutType.all
        render json: workouttype, status: :ok
    end


end
