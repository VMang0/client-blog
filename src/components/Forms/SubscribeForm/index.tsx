'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useSubscribeForm } from '@hooks/useSubscribeForm';

import style from './style.module.scss';

export const SubscribeForm = () => {
  const trSubscribe = useTranslations('SubscribeForm');
  const { handleChange, values, handleSubmit, errors, isSubmitting } = useSubscribeForm();

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
    </form>
  );
};
