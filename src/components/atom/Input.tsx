import { tw } from '@/utils/tailwindMerge';

type InputProps<T extends React.ElementType> = Component<T>;

export function Input({ className, onChange, ...props }: InputProps<'input'>) {
  return (
    <input
      className={tw(
        'rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm',
        className
      )}
      onChange={onChange}
      {...props}
    />
  );
}
