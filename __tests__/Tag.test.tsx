import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';

import { Tag } from '@components/ui/Tag';

import { DATA_TEST_ID } from '../cypress/e2e/data';

describe('Tag Component', () => {
  it('should render tag component', () => {
    render(<Tag tagName="Business" handleClick={() => {}} isActive={false} />);

    const tagElement = screen.getByTestId(DATA_TEST_ID.TAG);
    expect(tagElement).toBeInTheDocument();
  });

  it('should apply active class when tag is clicked at the first', () => {
    const TestComponent = () => {
      const [isActive, setIsActive] = useState(false);
      const handleClick = () => setIsActive((prevState) => !prevState);

      return <Tag tagName="Business" handleClick={handleClick} isActive={isActive} />;
    };

    render(<TestComponent />);

    const tagElement = screen.getByTestId(DATA_TEST_ID.TAG);
    fireEvent.click(tagElement);

    expect(tagElement).toHaveClass('active');
  });

  it('should apply non active class when tag is clicked at the second', () => {
    const TestComponent = () => {
      const [isActive, setIsActive] = useState(false);
      const handleChange = () => setIsActive((prevState) => !prevState);

      return <Tag tagName="Business" handleClick={handleChange} isActive={isActive} />;
    };

    render(<TestComponent />);

    const tagElement = screen.getByTestId(DATA_TEST_ID.TAG);
    fireEvent.click(tagElement);

    expect(tagElement).toHaveClass('active');

    fireEvent.click(tagElement);

    expect(tagElement).not.toHaveClass('active');
  });
});
