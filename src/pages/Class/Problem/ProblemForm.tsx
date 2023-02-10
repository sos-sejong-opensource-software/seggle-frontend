import { useParams } from 'react-router-dom';

import { Button, Heading, Label, Input, Select, Switch } from '@/components';
import { METRICS } from '@/constants';

import { useCreateProblemMutation } from './hooks';

export function ProblemForm() {
  const options = METRICS.map((metric) => ({ value: metric }));
  const { id: classId } = useParams() as { id: string };
  const { mutate: createProblem } = useCreateProblemMutation();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValue = Object.values(e.target)
      .filter(({ nodeName }) => nodeName === 'INPUT' || nodeName === 'SELECT')
      .map(({ value, files }) => (files ? files[0] : value));

    const payloadKey = [
      'title',
      'description',
      'evaluation',
      'public',
      'data_description',
      'data',
      'solution',
    ];

    const formData = new FormData();
    formData.append('class_id', classId);
    payloadKey.forEach((key, index) => formData.append(key, formValue[index]));

    createProblem(formData);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
      <Heading as="h3">문제 생성</Heading>
      <Input required placeholder="문제 이름을 입력하세요." />
      <div>
        <Heading as="h4">문제 설명</Heading>
        {/* FIXME: 마크다운 */}
        <Input required placeholder="문제 설명을 입력하세요." />
        <Label>평가 지표</Label>
        <Select required options={options} />
        <Label>전체 공개</Label>
        <Switch enabled={true} />
      </div>
      <div>
        <Heading as="h4">데이터</Heading>
        {/* FIXME: 마크다운 */}
        <Input placeholder="데이터 설명을 입력하세요." />
        <Label>데이터 파일</Label>
        <Input type="file" accept=".zip" required />
        <Label>정답 파일</Label>
        <Input type="file" accept=".csv" required />
      </div>
      <Button>저장</Button>
    </form>
  );
}
