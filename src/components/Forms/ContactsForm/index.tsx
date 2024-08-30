'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';
import { Select } from '@components/ui/Select';
import { TextArea } from '@components/ui/TextArea';
import { queryOptions } from '@constants/queryOptions';
import { useContactsForm } from '@hooks/useContactsForm';

import style from './style.module.scss';

export const ContactsForm = () => {
  const trForm = useTranslations('ContactsUs.Form');
  const { handleChange, values, handleSubmit, errors, isSubmitting } = useContactsForm();

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder={trForm('Placeholders.name')}
        onChange={handleChange}
        value={values.name}
        isError={!!errors?.name}
        size="large"
      />
      {errors?.name && <span className={style.error_text}>{errors.name}</span>}
      <Input
        name="email"
        placeholder={trForm('Placeholders.email')}
        onChange={handleChange}
        value={values.email}
        isError={!!errors?.email}
        size="large"
      />
      {errors?.email && <p className={style.error_text}>{errors.email}</p>}
      <Select
        name="queryRelated"
        placeholder={trForm('Placeholders.queryRelated')}
        onChange={handleChange}
        value={values.queryRelated}
        isError={!!errors?.queryRelated}
        options={queryOptions}
      />
      {errors?.queryRelated && <p className={style.error_text}>{errors.queryRelated}</p>}
      <TextArea
        name="message"
        placeholder={trForm('Placeholders.message')}
        onChange={handleChange}
        value={values.message}
        isError={!!errors?.message}
      />
      {errors?.message && <p className={style.error_text}>{errors.message}</p>}
      <Button
        title={isSubmitting ? 'Loading...' : trForm('btn_title')}
        styleType="primary"
        type="submit"
        disabled={isSubmitting}
      />
    </form>
  );
};
