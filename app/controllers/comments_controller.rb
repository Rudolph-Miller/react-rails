class CommentsController < ApplicationController
  def index
    @data = [
      { author: 'From server', description: 'Data from server.' }
    ]
    respond_to do |format|
      format.html
      format.json { render json: @data }
    end
  end
end
