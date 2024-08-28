export type QueryOptionValue = 'support' | 'feedback' | 'general' | 'billing' | 'partnership' | 'product';

export type QueryOption = {
  value: QueryOptionValue;
  label: string;
};

export type ContactsFormType = {
  name: string;
  email: string;
  queryRelated: QueryOptionValue;
  message: string;
};
