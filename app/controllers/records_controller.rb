class RecordsController < ApplicationController

  def index
	@records = Record.all
  end

  def create
	@record = Record.new(record_params)
	if @record.save
		render json: @record
	else
		render json: @record.errors, status: :unprocessable_entity
	end
  end
 
  def destroy
  	Record.destroy(params[:id])
	render json: @records
  end

  def update
	@record=Record.find(params[:id])
	@record.update_attributes(record_params)
	render json: @record	
  end

	private
	def record_params
		params.require(:record).permit(:date,:title,:amount)
	end
end
