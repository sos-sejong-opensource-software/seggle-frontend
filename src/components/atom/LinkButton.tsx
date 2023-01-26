import { Link, LinkProps } from 'react-router-dom';

import { tw } from '@/utils/tailwindMerge';

type LinkButtonProps<T extends React.ElementType> = Component<T> & LinkProps;

export function LinkButton({ to, className, children }: LinkButtonProps<'button'>) {
  return (
    <Link
      to={to}
      className={tw(
        `inline-block px-4 py-1.5
        rounded-lg
        text-base leading-7 font-semibold
        ease-linear transition-all duration-150
        `,
        'bg-primary-100 text-primary-500 hover:bg-primary-200',
        className
      )}
    >
      {children}
    </Link>
  );
}
