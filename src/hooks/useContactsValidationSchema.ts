import { object, string } from 'yup';

import { queryOptions } from '@constants/queryOptions';
import { useYupLocale } from '@hooks/useYupLocale';

export const useContactsValidationSchema = () => {
  useYupLocale();

  return object({
    name: string().required(),
    email: string().email().required(),
    queryRelated: string()
      .oneOf(queryOptions.map((option) => option.value))
      .required(),
    message: string().required(),
  });
};
