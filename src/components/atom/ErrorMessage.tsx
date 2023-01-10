import { tw } from '@/utils/tailwindMerge';

type TextProps<T extends React.ElementType> = Component<T>;

export function ErrorMessage({ className, children, ...props }: TextProps<'p'>) {
  return (
    <p className={tw('text-error-500 text-sm', className)} {...props}>
      {children}
    </p>
  );
}
