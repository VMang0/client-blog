import * as Yup from 'yup';

export const emailValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required(),
});
