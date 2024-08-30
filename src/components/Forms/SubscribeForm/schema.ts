import { object, string } from 'yup';

export const emailValidationSchema = object({
  email: string().email('').required(),
});
