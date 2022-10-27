class UsersController < ApplicationController

    # before_action :authorize, only: [:show]

    def index
        user = User.all
        render json: user, status: :ok
    end

    def create
        user = User.create(username: params[:username], password_digest: params[:password_digest])
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {errors: user.erros.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

    private

        def authorize
        
            return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        end
    
end
