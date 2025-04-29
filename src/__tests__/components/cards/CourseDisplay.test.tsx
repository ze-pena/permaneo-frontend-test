import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CourseDisplay from '@/app/components/displays/CourseDisplay';
import moneyMask from '@/app/utils/masks/moneyMask';
import dateMask from '@/app/utils/masks/dateMask';

const courseDisplayMock = {
  id: 2,
  title: 'Title Mock',
  description: 'Description Mock',
  price: 1280.69,
  created_at: '2023-01-15',
  is_purchased: false,
  is_favorite: false,
  video_progress: 0,
};

const buyAction = () => true;
const favoriteAction = () => true;

describe('<CourseDisplay />', () => {
  it('it should render the display title', () => {
    render(
      <CourseDisplay
        course={courseDisplayMock}
        buyAction={buyAction}
        favoriteAction={favoriteAction}
      />
    );

    const title = screen.getByText(courseDisplayMock.title);
    expect(title).toBeInTheDocument();
  });

  it('it should render the display description', () => {
    render(
      <CourseDisplay
        course={courseDisplayMock}
        buyAction={buyAction}
        favoriteAction={favoriteAction}
      />
    );

    const description = screen.getByText(courseDisplayMock.description);
    expect(description).toBeInTheDocument();
  });

  it('it should render the display price', () => {
    render(
      <CourseDisplay
        course={courseDisplayMock}
        buyAction={buyAction}
        favoriteAction={favoriteAction}
      />
    );

    const priceLabel = moneyMask(courseDisplayMock.price);
    const price = screen.getByRole('strong');
    expect(price.textContent).toEqual(priceLabel);
  });

  it('it should render the display date', () => {
    render(
      <CourseDisplay
        course={courseDisplayMock}
        buyAction={buyAction}
        favoriteAction={favoriteAction}
      />
    );

    const dateLabel = `Esse curso começou em ${dateMask(courseDisplayMock.created_at)}`;
    const date = screen.getByText(dateLabel);
    expect(date).toBeInTheDocument();
  });
});
