require 'test_helper'

class AdminControllerTest < ActionController::TestCase
  test "should get results" do
    get :results
    assert_response :success
  end

end
