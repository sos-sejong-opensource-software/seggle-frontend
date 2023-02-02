import { Button, Input } from '@/components';

import { useClassListQuery } from './query';

const mockData = [
  {
    id: 1,
    name: '기계학습',
    year: 2021,
    semester: 1,
    privilege: 1,
    is_show: true,
  },
];

export const useClassListEditTable = () => {
  const column = [
    { Header: '공개', accessor: 'visible' },
    { Header: '연도', accessor: 'year' },
    { Header: '학기', accessor: 'semester' },
    { Header: '제목', accessor: 'name' },
    { Header: '편집', accessor: 'edit' },
    { Header: '삭제', accessor: 'delete' },
  ];

  const { data: classList } = useClassListQuery();
  /** FIXME: mockData → classList로 변경 */
  const data = mockData
    .sort(({ year: prev }, { year: next }) => next - prev)
    .map((_class) => ({
      ..._class,
      visible: <Input type="checkbox" defaultChecked={_class.is_show} className="inline-block" />,
      edit: <Button>편집</Button>,
      delete: <Button>삭제</Button>,
    }));

  return {
    column,
    data,
  };
};
