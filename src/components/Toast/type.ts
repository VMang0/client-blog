type ToastPropsType = {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
};
