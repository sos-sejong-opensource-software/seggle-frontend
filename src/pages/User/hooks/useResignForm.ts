import { REGEXP } from '../constants';
import { useInput } from './useInput';

const passwordInput = {
  type: 'password',
  required: true,
};

export const useResignForm = () => {
  const resignForm = {
    currentPassword: {
      ...passwordInput,
      ...useInput(),
      regexp: REGEXP['PASSWORD'],
    },
  };

  return resignForm;
};
