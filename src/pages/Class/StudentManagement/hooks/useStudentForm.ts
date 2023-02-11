import { UseMutateFunction } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

type useStudentFormProps = {
  studentList: ClassStudentList;
  classId: string;
  api: UseMutateFunction<
    AxiosResponse<any, any>,
    AxiosError<unknown, any>,
    useCreateStudentListProps,
    unknown
  >;
};

type useCreateStudentListProps = { classId: string; payload: ClassStudentRequest };

export const useStudentForm = ({ studentList, classId, api }: useStudentFormProps) => {
  const defaultValue = studentList.map((student) => student?.username).join('');

  const handleStudentSubmit = (
    e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }
  ) => {
    e.preventDefault();

    const [value] = Object.values(e.target).map(({ value }) => value as string);
    const payload = { username: value.split('\n') };

    api({ classId, payload });
  };

  return {
    defaultValue,
    onSubmit: handleStudentSubmit,
  };
};
