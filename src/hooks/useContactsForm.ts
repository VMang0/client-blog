import { useFormik } from 'formik';

import { sendContactsForm } from '@api/contacts/sendContactsForm';
import { queryOptions } from '@constants/queryOptions';
import { useContactsValidationSchema } from '@hooks/useContactsValidationSchema';
import { ContactsFormType } from '@type/contacts';

export const useContactsForm = () => {
  const validationSchema = useContactsValidationSchema();

  const formik = useFormik<ContactsFormType>({
    initialValues: {
      name: '',
      email: '',
      queryRelated: queryOptions[0].value,
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await sendContactsForm(values);
        resetForm();
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
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
