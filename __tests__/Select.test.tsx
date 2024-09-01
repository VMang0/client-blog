import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { ChangeEvent, useState } from 'react';

import { Select } from '@components/ui/Select';
import { queryOptions } from '@constants/queryOptions';
import { QueryOptionValue } from '@type/contacts';

import { DATA_TEST_ID } from '../cypress/e2e/data';

describe('Select Component', () => {
  it('should render select component', () => {
    render(
      <Select
        name="queryRelated"
        placeholder="queryRelated"
        onChange={() => {}}
        value="queryRelated"
        isError={false}
        options={queryOptions}
      />,
    );

    const selectElement = screen.getByTestId(DATA_TEST_ID.SELECT);
    expect(selectElement).toBeInTheDocument();
  });

  it('should accept new select value', () => {
    const TestComponent = () => {
      const [value, setValue] = useState(queryOptions[0].value);
      const handleChange: (e: ChangeEvent<HTMLSelectElement>) => void = (e) =>
        setValue(e.target.value as QueryOptionValue);

      return (
        <Select
          name="queryRelated"
          placeholder="queryRelated"
          onChange={handleChange}
          value={value}
          isError={false}
          options={queryOptions}
        />
      );
    };

    render(<TestComponent />);

    const selectElement = screen.getByTestId(DATA_TEST_ID.SELECT);
    const testValue = queryOptions[1].value;

    fireEvent.change(selectElement, { target: { value: testValue } });

    expect(selectElement).toHaveValue(testValue);
  });
});
