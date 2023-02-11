import { useEffect, useState } from 'react';

import { Label, Switch, Input } from '@/components';

export const useContestModalBody = (data?: ContestRequest) => {
  const {
    name,
    start_time: startTime,
    end_time: endTime,
    is_exam: _isExam,
    visible: _visible,
  } = data ?? {};

  const [isExam, setIsExam] = useState(!!_isExam);
  const [visible, setVisible] = useState(!!_visible);

  useEffect(() => {
    setIsExam(!!_isExam);
    setVisible(!!_visible);
  }, [_isExam, _visible]);

  const contents = [
    {
      id: 'name',
      label: '과제 및 시험명',
      element: <Input required defaultValue={name} placeholder="과제 및 시험명" />,
    },
    {
      id: 'startTime',
      label: '시작 시간',
      element: (
        <Input type="datetime-local" required defaultValue={startTime} placeholder="시작 시간" />
      ),
    },
    {
      id: 'endTime',
      label: '종료 시간',
      element: (
        <Input type="datetime-local" required defaultValue={endTime} placeholder="종료 시간" />
      ),
    },
    {
      id: 'isExam',
      label: '시험 모드',
      element: <Switch enabled={isExam} onClick={() => setIsExam(!isExam)} />,
    },
    {
      id: 'visible',
      label: '공개',
      element: <Switch enabled={visible} onClick={() => setVisible(!visible)} />,
    },
  ];

  const renderBody = () => {
    return contents.map(({ id, label, element }) => (
      <div key={id}>
        <Label htmlFor={id}>{label}</Label>
        {element}
      </div>
    ));
  };

  return {
    renderBody,
    isExam,
    visible,
  };
};
