import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CourseCard from '@/app/components/cards/CourseCard';

const courseCardMock = {
  id: 2,
  title: 'Title Mock',
  description: 'Description Mock',
  price: 1280.69,
  created_at: '2023-01-15',
  is_purchased: false,
  is_favorite: false,
  video_progress: 0,
};

describe('<CourseCard/>', () => {
  it('it should render the card title', () => {
    render(<CourseCard {...courseCardMock} />);
    const title = screen.getByText(courseCardMock.title);
    expect(title).toBeInTheDocument();
  });

  it('it should render the description', () => {
    render(<CourseCard {...courseCardMock} />);
    const description = screen.getByText(courseCardMock.description);
    expect(description).toBeInTheDocument();
  });

  it('it should render the buy redirection link', () => {
    render(<CourseCard {...courseCardMock} />);
    const link = screen.getByRole('link');
    expect(link).toHaveProperty('href', 'http://localhost/buy/2');
  });

  it('it should render the learn redirection link', () => {
    courseCardMock.is_purchased = true;
    render(<CourseCard {...courseCardMock} />);
    const link = screen.getByRole('link');
    expect(link).toHaveProperty('href', 'http://localhost/learn/2');
  });
});
