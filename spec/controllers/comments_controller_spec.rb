require 'rails_helper'

RSpec.describe CommentsController, type: :controller do
  describe 'GET #index' do
    it 'returns http success' do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'binds @data' do
      get :index
      expect(assigns(:data)).to be_a(Array)
    end
  end
end
