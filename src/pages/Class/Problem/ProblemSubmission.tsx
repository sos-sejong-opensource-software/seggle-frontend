import { useParams } from 'react-router-dom';

import {
  useCreateContestProblemSubmissionCheckMutation,
  useCreateContestProblemSubmissionMutation,
} from './hooks';

import { FileSubmissionForm, LeaderboardSubmissionForm } from './components';

export function ProblemSubmission() {
  const { classId, contestId, contestProblemId } = useParams() as {
    classId: string;
    contestId: string;
    contestProblemId: string;
  };

  const { mutate: createSubmission } = useCreateContestProblemSubmissionMutation();
  const { mutate: createSubmissionCheck } = useCreateContestProblemSubmissionCheckMutation();

  const handleFileSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [csv, ipynb] = Object.values(e.target).map(({ files }) => files && files[0]);

    const formData = new FormData();
    formData.append('csv', csv);
    formData.append('ipynb', ipynb);

    createSubmission({ classId, contestId, contestProblemId, payload: formData });
  };

  const handleCheckSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { id } = Object.values(e.target).find(({ checked }) => checked);
    createSubmissionCheck({ classId, contestId, contestProblemId, payload: { id } });
  };

  return (
    <>
      <FileSubmissionForm onSubmit={handleFileSumbit} />
      <LeaderboardSubmissionForm onSubmit={handleCheckSubmit} />
    </>
  );
}
