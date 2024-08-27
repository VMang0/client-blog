import { useFormik } from 'formik';

import { sendContactsForm } from '@api/contacts/sendContactsForm';
import { contactsValidationSchema } from '@components/Forms/ContactsForm/schema';
import { queryOptions } from '@constants/queryOptions';
import { ContactsFormType } from '@type/contacts';

export const useContactsForm = () => {
  const formik = useFormik<ContactsFormType>({
    initialValues: {
      name: '',
      email: '',
      queryRelated: queryOptions[0].value,
      message: '',
    },
    validationSchema: contactsValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await sendContactsForm(values);
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
