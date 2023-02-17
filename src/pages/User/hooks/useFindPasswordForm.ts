import { REGEXP } from '../constants';
import { useInput } from './useInput';

const emailInput = {
  type: 'email',
  required: true,
};

export const useFindPasswordForm = () => {
  const findPasswordForm = {
    currentEmail: {
      ...emailInput,
      ...useInput(),
      regexp: REGEXP['EMAIL'],
    },
  };

  return findPasswordForm;
};
