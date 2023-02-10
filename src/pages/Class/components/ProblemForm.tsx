import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseMutateFunction } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';

import { Button, Heading, Label, Input, Select, Switch, Editor } from '@/components';
import { METRICS } from '@/constants';

type ProblemFormProps<T extends React.ElementType> = Component<T> & {
  data?: ProblemRequest;
  mutate: UseMutateFunction<AxiosResponse<any, any>, AxiosError<unknown, any>, FormData, unknown>;
};

export function ProblemForm({ data, mutate }: ProblemFormProps<'form'>) {
  const {
    title,
    description: _description,
    evaluation,
    public: _public,
    data_description,
    data: dataFile,
    solution,
  } = data ?? {};
  const [description, setDescription] = useState(_description ?? '');
  const [dataDescription, setDataDescription] = useState(data_description ?? '');

  const { classId } = useParams() as { classId: string };

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

    mutate(formData);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
      <Heading as="h3">{data ? '문제 편집' : '문제 생성'}</Heading>
      <Input required placeholder="문제 이름을 입력하세요." name="title" defaultValue={title} />
      <div>
        <Heading as="h4">문제 설명</Heading>
        <Editor value={description} onChange={(value) => setDescription(value)} />
        <Label>평가 지표</Label>
        <Select required options={options} name="evaluation" defaultValue={evaluation} />
        <Label>전체 공개</Label>
        <Switch enabled={_public ?? true} name="public" />
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
