import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { ChangeEvent, useState } from 'react';

import { Input } from '@components/ui/Input';

import { DATA_TEST_ID } from '../cypress/e2e/data';

describe('Input Component', () => {
  it('shold render input component', () => {
    render(
      <Input name="name" placeholder="Full name" onChange={() => {}} value="Valeria" isError={false} size="medium" />,
    );

    const inputElement = screen.getByTestId(DATA_TEST_ID.INPUT);
    expect(inputElement).toBeInTheDocument();
  });

  it('should accept new input value', () => {
    const TestComponent = () => {
      const [value, setValue] = useState('Valeria');
      const handleChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => setValue(e.target.value);

      return (
        <Input
          name="name"
          placeholder="Full name"
          onChange={handleChange}
          value={value}
          isError={false}
          size="medium"
          data-testid={DATA_TEST_ID.INPUT}
        />
      );
    };

    render(<TestComponent />);

    const inputElement = screen.getByTestId(DATA_TEST_ID.INPUT);
    const testValue = 'new test input';

    fireEvent.change(inputElement, { target: { value: testValue } });

    expect(inputElement).toHaveValue(testValue);
  });

  it('should apply dark styles', () => {
    render(
      <Input
        name="name"
        placeholder="Full name"
        onChange={() => {}}
        value="Valeria"
        isError={false}
        size="medium"
        dark
      />,
    );

    const inputElement = screen.getByTestId(DATA_TEST_ID.INPUT);

    expect(inputElement).toHaveClass('input__dark');
  });

  it('should apply error styles when error is true', () => {
    render(<Input name="name" placeholder="Full name" onChange={() => {}} value="Valeria" size="medium" isError />);

    const inputElement = screen.getByTestId(DATA_TEST_ID.INPUT);

    expect(inputElement).toHaveClass('error');
  });

  it('should apply the correct size styled', () => {
    render(
      <Input name="name" placeholder="Full name" onChange={() => {}} value="Valeria" size="large" isError={false} />,
    );

    const inputElement = screen.getByTestId(DATA_TEST_ID.INPUT);

    expect(inputElement).toHaveClass('large');
  });
});
