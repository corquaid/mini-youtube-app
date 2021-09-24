import App from './App';
import { render } from '@testing-library/react';
import { VideoContext } from './contexts/VideoContext';

it("should render App component", () => {
  const props = {
    loading: true,
    videos: [],
    setLoading: jest.fn(),
    setVideos: jest.fn()
  }
  render(
    <VideoContext.Provider value={props}>
      <App />
    </VideoContext.Provider>
  )
})


