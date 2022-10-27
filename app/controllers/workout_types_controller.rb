class WorkoutTypesController < ApplicationController

    def index 
        workouttype = WorkoutType.all
        render json: workouttype, status: :ok
    end

    def create
        workouttype = WorkoutType.create(name: params[:name], cals_per_hour: params[:cals_per_hour])
        if workouttype.valid?
            render json: workouttype, status: :created
        else
            render json: {errors: workouttype.errors.full_messages}, status: :unprocessable_entity
        end 
    end


end
