import { useParams } from 'react-router-dom';

import {
  useClassStudentListQuery,
  useClassTaListQuery,
  useCreateStudentListMutation,
  useCreateTaListMutation,
  useStudentForm,
} from './hooks';
import { ClassStudentForm } from './components';

export function ClassStudentManagement() {
  const { id: classId } = useParams() as { id: string };

  const {
    data: { results: studentList },
  } = useClassStudentListQuery(classId);
  const {
    data: { results: taList },
  } = useClassTaListQuery(classId);

  const { mutate: createStudentList } = useCreateStudentListMutation();
  const { mutate: createTatList } = useCreateTaListMutation();

  const { defaultValue: defaultStudentList, onSubmit: onStudentSubmit } = useStudentForm({
    studentList,
    classId,
    api: createStudentList,
  });

  const { defaultValue: defaultTaList, onSubmit: onTaSubmit } = useStudentForm({
    studentList: taList,
    classId,
    api: createTatList,
  });

  return (
    <div className="flex gap-4 justify-center flex-col sm:flex-row">
      <ClassStudentForm
        id="student"
        label="학생 등록"
        placeholder="수강생을 등록하세요"
        defaultValue={defaultStudentList}
        onSubmit={onStudentSubmit}
      />
      <ClassStudentForm
        id="ta"
        label="TA 등록"
        placeholder="TA를 등록하세요"
        defaultValue={defaultTaList}
        onSubmit={onTaSubmit}
      />
    </div>
  );
}
