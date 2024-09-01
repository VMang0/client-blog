import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { sendContactsForm } from '@api/contacts/sendContactsForm';
import { queryOptions } from '@constants/queryOptions';
import { useContactsValidationSchema } from '@hooks/useContactsValidationSchema';
import { ContactsFormType } from '@type/contacts';

export const useContactsForm = () => {
  const trForm = useTranslations('ContactsUs.Form');
  const validationSchema = useContactsValidationSchema();
  const [toast, setToast] = useState<Omit<ToastPropsType, 'onClose'> | null>(null);

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
        setToast({ message: trForm('success'), type: 'success' });
        resetForm();
      } catch (error: unknown) {
        setToast({ message: trForm('error'), type: 'error' });
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleCloseToast = () => {
    setToast(null);
  };

  return {
    toast,
    handleCloseToast,
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,
    values: formik.values,
    errors: formik.errors,
    isSubmitting: formik.isSubmitting,
  };
};
