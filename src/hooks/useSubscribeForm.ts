import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { subscribeOnNews } from '@api/subscribeOnNews';
import { emailValidationSchema } from '@components/Forms/SubscribeForm/schema';

export const useSubscribeForm = () => {
  const trForm = useTranslations('SubscribeForm');
  const [toast, setToast] = useState<Omit<ToastPropsType, 'onClose'> | null>(null);
  const formik = useFormik<{ email: string }>({
    initialValues: {
      email: '',
    },
    validationSchema: emailValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await subscribeOnNews(values);
        setToast({ message: trForm('success'), type: 'success' });
        resetForm();
      } catch (error) {
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
    ...formik,
    toast,
    handleCloseToast,
  };
};
