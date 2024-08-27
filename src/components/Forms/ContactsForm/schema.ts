import * as Yup from 'yup';

import { queryOptions } from '@constants/queryOptions';

export const contactsValidationSchema = Yup.object({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  queryRelated: Yup.string()
    .oneOf(
      queryOptions.map((option) => option.value),
      'Invalid selection',
    )
    .required('Query Related is required'),
  message: Yup.string().required('Message is required'),
});
