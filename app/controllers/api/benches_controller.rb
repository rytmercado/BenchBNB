class Api::BenchesController < ApplicationController
    def index
        # p params[:bounds]
        @benches = Bench.in_bounds(params['filters']['bounds'])
        render :index
    end

    def create
        # debugger
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

end
