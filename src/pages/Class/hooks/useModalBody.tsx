import { Label, Select, Input } from '@/components';

import { useClassQuery } from './query';

export const useModalBody = (id: string) => {
  const { data: _class } = useClassQuery(id);

  const { year, semester, name } = _class;
  const contents = [
    {
      id: 'year',
      label: '연도',
      element: <Select id="year" selected={`${year}`} disabled options={[{ value: `${year}` }]} />,
    },
    {
      id: 'semeter',
      label: '학기',
      element: (
        <Select
          id="semester"
          defaultValue={`${semester}`}
          options={[{ value: '1' }, { value: '2' }]}
        />
      ),
    },
    {
      id: 'name',
      label: '수업명(학기명)',
      element: <Input id="name" defaultValue={name} />,
    },
  ];

  const renderBody = () => {
    return contents.map(({ id, label, element }) => (
      <>
        <Label htmlFor={id}>{label}</Label>
        {element}
      </>
    ));
  };

  return {
    renderBody,
  };
};
