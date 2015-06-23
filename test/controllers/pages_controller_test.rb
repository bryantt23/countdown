require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get countdown" do
    get :countdown
    assert_response :success
  end

end
