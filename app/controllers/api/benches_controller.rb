class Api::BenchesController < ApplicationController
    def index
        @benches = Bench.in_bounds(params[:filters][:bounds])
        @benches = params[:filters][:maxSeating] && params[:filters][:minSeating] ? 
            @benches.where(num_seats: seating_range) : @benches
        render :index
    end

    def create
        @bench = Bench.new(bench_params)

        if @bench.save
            render json: @bench
        else
            render json: @bench.error.full_messages, status: 420
        end
    end

    private

    def bench_params
        params.require(:bench).permit(:description, :num_seats, :lat, :lng)
    end

    def seating_range
        (params[:filters][:minSeating]..params[:filters][:maxSeating])
    end

end
