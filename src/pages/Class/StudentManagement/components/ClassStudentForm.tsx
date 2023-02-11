import { Button, Label } from '@/components';

type ClassStudentFormProps<T extends React.ElementType> = Component<T> & {
  id: string;
  label: string;
  placeholder: string;
};

export function ClassStudentForm({
  id,
  label,
  placeholder,
  defaultValue,
  ...props
}: ClassStudentFormProps<'form'>) {
  return (
    <form className="flex flex-col gap-3" {...props}>
      <Label htmlFor={id} className="text-xl font-bold">
        {label}
      </Label>
      <textarea
        id={id}
        cols={35}
        rows={15}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="p-4 border-2 border-gray-300 rounded-lg resize-none"
      />
      <Button>등록</Button>
    </form>
  );
}
