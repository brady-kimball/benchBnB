class Api::BenchesController < ApplicationController

  def index
    if params[:bounds]
      @benches = Bench.in_bounds(params[:bounds])
    else
      @benches = Bench.all
    end
    @benches = @benches.where("seating >= ?", params[:minSeating])
      .where("seating <= ?", params[:maxSeating])
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def show
    @bench = Bench.find(params[:id])
    render :show
  end

  private

  def bench_params
    params
      .require(:bench)
      .permit(:description, :lat, :lng, :seating, :max_seating, :min_seating)
  end
end
