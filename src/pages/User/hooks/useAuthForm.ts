import { useInput } from './useInput';

import { REGEXP } from '../constants';

const defaultInput = {
  type: 'text',
  required: true,
};

const passwordInput = {
  ...defaultInput,
  type: 'password',
};

export const useAuthForm = (mode: 'login' | 'register') => {
  const loginForm = {
    username: {
      ...defaultInput,
      ...useInput(),
      regexp: REGEXP['USERNAME'],
    },
    password: {
      ...passwordInput,
      ...useInput(),
      regexp: REGEXP['PASSWORD'],
    },
  };

  const registerForm = {
    name: {
      ...defaultInput,
      ...useInput(),
      regexp: REGEXP['NAME'],
    },
    email: {
      ...defaultInput,
      ...useInput(),
      regexp: REGEXP['EMAIL'],
    },
    ...loginForm,
    passwordCheck: {
      ...passwordInput,
      ...useInput(),
      regexp: REGEXP['PASSWORD'],
    },
  };

  return mode === 'login' ? loginForm : registerForm;
};
