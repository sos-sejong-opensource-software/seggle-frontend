import { useOutletContext } from 'react-router-dom';
import { Heading } from '@/components';
import { getFileDownloadLink } from '@/utils/getFileDownloadLink';

export function ProblemData() {
  const { data_description: dataDescription, data } = useOutletContext<{
    data_description: string;
    data: string;
  }>();
  return (
    <section className="flex flex-col gap-4">
      <Heading as="h5">데이터 설명</Heading>
      {dataDescription}
      <Heading as="h5">데이터 다운로드</Heading>
      <a
        href={getFileDownloadLink(data, 'zip')}
        className="px-4 py-1.5 rounded-lg font-semibold bg-primary-100 text-primary-500 hover:bg-primary-200 hover:ring-primary-200"
      >
        데이터 다운로드
      </a>
    </section>
  );
}
