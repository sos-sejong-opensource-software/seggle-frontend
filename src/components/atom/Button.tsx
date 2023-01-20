import { tw } from '@/utils/tailwindMerge';

type ButtonColor = 'primary' | 'success' | 'error';
type ButtonProps<T extends React.ElementType> = Component<T> & {
  color?: ButtonColor;
};

export function Button({
  color = 'primary',
  className,
  children,
  ...props
}: ButtonProps<'button'>) {
  const buttonColor = {
    primary: 'bg-primary-100 text-primary-500 hover:bg-primary-200 hover:ring-primary-200',
    success: 'bg-success-100 text-success-500 hover:bg-success-200 hover:ring-success-200',
    error: 'bg-error-100 text-error-500 hover:bg-error-200 hover:ring-error-200',
  };
  return (
    <button
      className={tw(
        `inline-block px-4 py-1.5
          rounded-lg
          shadow-sm
          text-base leading-7 font-semibold
          disabled:bg-disabled-300 disabled:ring-disabled-300
          ease-linear transition-all duration-150
        `,
        buttonColor[color],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
