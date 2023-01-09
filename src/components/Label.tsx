import { tw } from '@/utils/tailwindMerge';

type LabelProps<T extends React.ElementType> = Component<T>;

export function Label({ className, children, ...props }: LabelProps<'label'>) {
  return (
    <div>
      <label className={tw('text-gray-500', className)} {...props}>
        {children}
      </label>
    </div>
  );
}
