import { useTranslations } from 'next-intl';
import { setLocale } from 'yup';

export const useYupLocale = () => {
  const trValidation = useTranslations('ContactsUs.Form.Validation');
  const fieldTranslations = useTranslations('ContactsUs.Form.Fields');

  setLocale({
    mixed: {
      required: ({ path }) => trValidation('required', { field: fieldTranslations(path) }),
      oneOf: ({ path }) => trValidation('oneOf', { field: fieldTranslations(path) }),
    },
    string: {
      email: ({ path }) => trValidation('email', { field: fieldTranslations(path) }),
    },
  });
};
