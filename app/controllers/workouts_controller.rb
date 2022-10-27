class WorkoutsController < ApplicationController

    def index 
        workout = Workout.all
        render json: workout, status: :ok
    end

    def show
        workout = Workout.find_by(user_id: params[:id])
        if workout
            render json: workout, status: :ok 
        else
            render json: {error: "Workout not found"}, status: :not_found 
        end
    end

    def create
        exercise = WorkoutType.find_by(name: params[:workout_type])
        workout = Workout.create(date: Date.today, mood: params[:mood], workout_type_id: exercise.id, user_id: params[:user_id], duration: params[:duration])
        if workout.valid?
            render json: workout, status: :created
        else
            render json: {errors: workout.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        exercise = WorkoutType.find_by(name: params[:workout_type])
        workout = Workout.find_by(id: params[:id])
        if workout
            workout.update(mood: params[:mood], workout_type_id: exercise.id, user_id: params[:user_id], duration: params[:duration])
            if workout.valid?
                render json: workout, status: :ok
            else
                render json: {errors: workout.errors.full_messages}
            end
        else
            render json: {error: "Workout not found"}, status: :not_found 
        end

    end


    def destroy
        workout = Workout.find_by(id: params[:id])
        if workout
            workout.destroy
            render json: {}, status: :no_content
        else
            render json: {error: "Workout not found"}, status: :not_found 
        end
    end




end
