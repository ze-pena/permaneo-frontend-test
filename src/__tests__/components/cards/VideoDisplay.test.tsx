import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import VideoDisplay from '@/app/components/displays/VideoDisplay';

const videoDisplayMock = {
  id: 2,
  title: 'Title Mock',
  description: 'Description Mock',
  price: 1280.69,
  created_at: '2023-01-15',
  is_purchased: false,
  is_favorite: false,
  video_progress: 0,
};

const saveProgress = () => true;

describe('<VideoDisplay/>', () => {
  it('it should render the display title', () => {
    render(<VideoDisplay course={videoDisplayMock} saveProgress={saveProgress} />);

    const title = screen.getByText(videoDisplayMock.title);
    expect(title).toBeInTheDocument();
  });
});
