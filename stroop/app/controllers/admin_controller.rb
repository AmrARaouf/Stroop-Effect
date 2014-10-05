class AdminController < ApplicationController
  def results
  	@results = Result.all
  end
end
