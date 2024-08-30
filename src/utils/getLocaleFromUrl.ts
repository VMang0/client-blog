export const getLocaleFromUrl = (): string => {
  const path = window.location.pathname;
  const segments = path.split('/');
  return segments[1] || 'en';
};
