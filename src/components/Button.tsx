import { tw } from '@/utils/tailwindMerge';

type ButtonProps<T extends React.ElementType> = Component<T>;

export function Button({ className, children, ...props }: ButtonProps<'button'>) {
  return (
    <button
      className={tw(
        'inline-block rounded-lg bg-primary-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primary-600 hover:bg-primary-700 hover:ring-primary-700',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
