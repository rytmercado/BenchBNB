class Api::BenchesController < ApplicationController
    def index
        p params[:bounds]
        @benches = Bench.in_bounds({
              "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
              "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
            })
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
        params.require(:bench).permit(:description, :lat, :lng)
    end

end
