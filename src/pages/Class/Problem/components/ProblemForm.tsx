import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Heading, Label, Input, Select, Switch, Editor } from '@/components';
import { METRICS } from '@/constants';

import { useCreateProblemMutation } from './hooks';

export function ProblemForm() {
  const [description, setDescription] = useState('');
  const [dataDescription, setDataDescription] = useState('');

  const { classId } = useParams() as { classId: string };
  const { mutate: createProblem } = useCreateProblemMutation();

  const options = METRICS.map((metric) => ({ value: metric }));

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payloadKey = ['title', 'evaluation', 'public', 'data', 'solution'];

    const formValue = Object.values(e.target)
      .filter(({ name }) => payloadKey.includes(name))
      .map(({ name, checked, value, files }) =>
        name === 'public' ? checked : files ? files[0] : value
      );

    const formData = new FormData();
    formData.append('class_id', classId);
    formData.append('description', description);
    formData.append('data_description', dataDescription);
    payloadKey.forEach((key, index) => formData.append(key, formValue[index]));

    createProblem(formData);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
      <Heading as="h3">문제 생성</Heading>
      <Input required placeholder="문제 이름을 입력하세요." name="title" />
      <div>
        <Heading as="h4">문제 설명</Heading>
        <Editor value={description} onChange={(value) => setDescription(value)} />
        <Label>평가 지표</Label>
        <Select required options={options} name="evaluation" />
        <Label>전체 공개</Label>
        <Switch enabled={true} name="public" />
      </div>
      <div>
        <Heading as="h4">데이터</Heading>
        <Editor value={dataDescription} onChange={(value) => setDataDescription(value)} />
        <Label>데이터 파일</Label>
        <Input type="file" accept=".zip" required name="data" />
        <Label>정답 파일</Label>
        <Input type="file" accept=".csv" required name="solution" />
      </div>
      <Button>저장</Button>
    </form>
  );
}
