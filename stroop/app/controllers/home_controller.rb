class HomeController < ApplicationController
  def index
  end

  def ending
  	match_time = params[:match_time];
  	match_correct = params[:match_correct];
  	mismatch_time = params[:mismatch_time];
  	mismatch_correct = params[:mismatch_correct];
  	Result.create(match_time: match_time, mismatch_time:mismatch_time,
  		match_correct:match_correct, mismatch_correct:mismatch_correct);
  end
end
