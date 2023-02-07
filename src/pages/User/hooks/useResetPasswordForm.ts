import { REGEXP } from '../constants';
import { useInput } from './useInput';

const passwordInput = {
  type: 'password',
  required: true,
};

export const useResetPasswordForm = () => {
  const resetPasswordForm = {
    currentPassword: {
      ...passwordInput,
      ...useInput(),
      regexp: REGEXP['PASSWORD'],
    },
    newPassword: {
      ...passwordInput,
      ...useInput(),
      regexp: REGEXP['PASSWORD'],
    },
    newPasswordCheck: {
      ...passwordInput,
      ...useInput(),
      regexp: REGEXP['PASSWORD'],
    },
  };

  return resetPasswordForm;
};
