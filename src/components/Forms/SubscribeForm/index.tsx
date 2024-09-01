'use client';

import { useTranslations } from 'next-intl';

import { Toast } from '@components/Toast';
import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';
import { useSubscribeForm } from '@hooks/useSubscribeForm';

import style from './style.module.scss';

export const SubscribeForm = () => {
  const trSubscribe = useTranslations('SubscribeForm');
  const { handleChange, values, handleSubmit, errors, isSubmitting, toast, handleCloseToast } = useSubscribeForm();

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Input
        name="email"
        placeholder={trSubscribe('placeholder')}
        size="medium"
        dark
        onChange={handleChange}
        value={values.email}
        isError={!!errors?.email}
      />
      <Button
        title={isSubmitting ? 'Loading...' : trSubscribe('btn_title')}
        styleType="primary"
        type="submit"
        disabled={isSubmitting}
      />
      {toast && <Toast onClose={handleCloseToast} {...toast} />}
    </form>
  );
};
