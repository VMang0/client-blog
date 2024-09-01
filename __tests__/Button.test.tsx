import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '@components/ui/Button';

import { DATA_TEST_ID } from '../cypress/e2e/data';

describe('Button Component', () => {
  it('should render button component', () => {
    const btnTitle = 'Read more >';
    render(<Button title={btnTitle} styleType="primary" type="button" />);

    const buttonElement = screen.getByTestId(DATA_TEST_ID.BUTTON);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(btnTitle);
  });

  it('should call onclick when button is clicked', () => {
    const handleClick = jest.fn();

    render(<Button title="Read more >" styleType="primary" type="button" onClick={handleClick} />);

    const buttonElement = screen.getByTestId(DATA_TEST_ID.BUTTON);

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply the correct size styled', () => {
    const btnTitle = 'Read more >';

    render(<Button title={btnTitle} styleType="primary" size="small" />);

    const buttonElement = screen.getByTestId(DATA_TEST_ID.BUTTON);
    expect(buttonElement).toHaveClass('small');
  });

  it('should apply the correct style type styled', () => {
    const btnTitle = 'Read more >';
    const { rerender } = render(<Button title={btnTitle} styleType="primary" size="medium" />);

    let buttonElement = screen.getByTestId(DATA_TEST_ID.BUTTON);
    expect(buttonElement).toHaveClass('primary');

    rerender(<Button title="Secondary Button" styleType="secondary" size="medium" />);

    buttonElement = screen.getByTestId(DATA_TEST_ID.BUTTON);
    expect(buttonElement).toHaveClass('secondary');
  });
});
