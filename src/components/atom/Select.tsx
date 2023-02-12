import { tw } from '@/utils/tailwindMerge';

type SelectProps<T extends React.ElementType> = Component<T> & {
  selected?: string;
  options: Array<{ value: string }>;
};

export function Select({
  selected,
  onChange,
  options,
  className,
  ...props
}: SelectProps<'select'>) {
  return (
    <select
      value={selected}
      onChange={onChange}
      className={tw(
        `select
        inline-flex shrink-0
        w-full max-w-xs
        px-3 py-2
        select-none appearance-none
        rounded-lg border-2
        text-base font-semibold
        cursor-pointer
        `,
        className
      )}
      {...props}
    >
      {options.map(({ value }, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
