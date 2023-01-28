import { tw } from '@/utils/tailwindMerge';
import { Heading } from '@/components';

type PageTitleProps<T extends React.ElementType> = Component<T>;

export function PageTitle({ className, children, ...props }: PageTitleProps<'h2'>) {
  return (
    <Heading className={tw('py-8 sm:py-10', className)} {...props}>
      {children}
    </Heading>
  );
}
