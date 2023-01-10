type HeadingProps<T extends React.ElementType> = Component<T>;

export function Heading({ children, ...props }: HeadingProps<'h2'>) {
  return <h2 {...props}>{children}</h2>;
}
