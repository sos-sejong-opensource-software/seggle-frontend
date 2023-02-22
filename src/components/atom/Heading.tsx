import { tw } from '@/utils/tailwindMerge';

type HeadingProps<T extends React.ElementType> = Component<T> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Heading({ as = 'h2', className, children, ...props }: HeadingProps<'h2'>) {
  switch (as) {
    case 'h1':
      return (
        <Heading1 className={className} {...props}>
          {children}
        </Heading1>
      );
    case 'h2':
      return (
        <Heading2 className={className} {...props}>
          {children}
        </Heading2>
      );
    case 'h3':
      return (
        <Heading3 className={className} {...props}>
          {children}
        </Heading3>
      );
    case 'h4':
      return (
        <Heading4 className={className} {...props}>
          {children}
        </Heading4>
      );
    case 'h5':
      return (
        <Heading5 className={className} {...props}>
          {children}
        </Heading5>
      );
    case 'h6':
      return (
        <Heading6 className={className} {...props}>
          {children}
        </Heading6>
      );
  }
}

const defaultHeadingStyle = 'font-bold';

function Heading1({ className, children, ...props }: HeadingProps<'h1'>) {
  return (
    <h1 className={tw('text-3xl sm:text-4xl', defaultHeadingStyle, className)} {...props}>
      {children}
    </h1>
  );
}

function Heading2({ className, children, ...props }: HeadingProps<'h2'>) {
  return (
    <h2 className={tw('text-2xl sm:text-3xl', defaultHeadingStyle, className)} {...props}>
      {children}
    </h2>
  );
}

function Heading3({ className, children, ...props }: HeadingProps<'h3'>) {
  return (
    <h3 className={tw('text-xl sm:text-2xl', defaultHeadingStyle, className)} {...props}>
      {children}
    </h3>
  );
}

function Heading4({ className, children, ...props }: HeadingProps<'h4'>) {
  return (
    <h4 className={tw('text-lg sm:text-xl', defaultHeadingStyle, className)} {...props}>
      {children}
    </h4>
  );
}

function Heading5({ className, children, ...props }: HeadingProps<'h5'>) {
  return (
    <h5 className={tw('text-base sm:text-lg', defaultHeadingStyle, className)} {...props}>
      {children}
    </h5>
  );
}

function Heading6({ className, children, ...props }: HeadingProps<'h6'>) {
  return (
    <h6 className={tw('text-md sm:text-base', defaultHeadingStyle, className)} {...props}>
      {children}
    </h6>
  );
}
