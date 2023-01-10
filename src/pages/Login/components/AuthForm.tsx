import { PAGE } from '@/constants';

import { LOGIN_ERROR, REGISTER_ERROR } from '../constants';
import { useInput } from '../hooks';

/** FIXME: Atom 컴포넌트로 대체될 부분 */
type AtomProps<T extends React.ElementType> = Component<T>;

function Label({ children, ...props }: AtomProps<'label'>) {
  return <label {...props}>{children}</label>;
}

function Input({ ...props }: AtomProps<'input'>) {
  return <input type="text" {...props} />;
}

function ErrorMessage({ children, ...props }: AtomProps<'p'>) {
  return <p {...props}>{children}</p>;
}

function Button({ children, ...props }: AtomProps<'button'>) {
  return (
    <button type="submit" {...props}>
      {children}
    </button>
  );
}

type AuthFormProps = {
  mode: 'login' | 'register';
  inputList: (ReturnType<typeof useInput> & { id: string; label: string; valid(): boolean })[];
  onSubmit: (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => Promise<void>;
};

export function AuthForm({ mode, inputList, onSubmit }: AuthFormProps) {
  const ERROR_MESSAGE = mode === 'login' ? LOGIN_ERROR : REGISTER_ERROR;

  const isFormValid = inputList.every((input) => input.valid());

  return (
    <form onSubmit={onSubmit}>
      {inputList.map(({ id, label, value, setValue, error, setError, valid }, index) => (
        <>
          <Label htmlFor={id}>{label}</Label>
          <Input
            id={id}
            value={value}
            onChange={({ target: { value } }) => {
              setValue(value);
              setError(!valid.call(inputList[index]));
            }}
          />
          {error && <ErrorMessage>{ERROR_MESSAGE[id.toUpperCase()]}</ErrorMessage>}
        </>
      ))}
      <Button disabled={!isFormValid}>{PAGE[mode.toUpperCase()]}</Button>
    </form>
  );
}
