import { Heading, Input, Button } from '@/components';

type FileSubmissionFormProps<T extends React.ElementType> = Component<T>;

export function FileSubmissionForm({ ...props }: FileSubmissionFormProps<'form'>) {
  return (
    <form className="flex flex-col gap-2 mb-10" {...props}>
      <Heading as="h4">csv 파일 제출</Heading>
      <p>하나의 csv 파일만 업로드 가능합니다</p>
      <Input type="file" accept=".csv" />

      <Heading as="h4">ipynb 파일 제출</Heading>
      <p>하나의 ipynb 파일만 업로드 가능합니다</p>
      <Input type="file" accept=".ipynb" />

      <Button className="inline-block">파일 제출</Button>
    </form>
  );
}
