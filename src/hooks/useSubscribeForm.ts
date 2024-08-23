import { useFormik } from 'formik';

import { subscribeOnNews } from '@api/subscribeOnNews';
import { emailValidationSchema } from '@components/Forms/SubscribeForm/schema';

export const useSubscribeForm = () => {
  const formik = useFormik<{ email: string }>({
    initialValues: {
      email: '',
    },
    validationSchema: emailValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await subscribeOnNews(values);
        resetForm();
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return {
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,
    values: formik.values,
    errors: formik.errors,
    isSubmitting: formik.isSubmitting,
  };
};
