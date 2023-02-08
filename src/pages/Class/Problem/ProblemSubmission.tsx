import { Button, Heading, Table, Input } from '@/components';

export function ProblemSubmission() {
  const column = [
    { Header: '#', accessor: 'id' },
    { Header: 'csv 파일', accessor: 'csvFile' },
    { Header: 'ipynb 파일', accessor: 'ipynbFile' },
    { Header: '점수', accessor: 'score' },
    { Header: 'status', accessor: 'status' },
    { Header: '제출 날짜', accessor: 'submissionDate' },
  ];
  /** FIXME: 수업 상세 정보 */
  const data = [{ id: 1 }];

  return (
    <>
      <form className="flex flex-col gap-2 mb-10">
        <Heading as="h4">csv 파일 제출</Heading>
        <p>하나의 csv 파일만 업로드 가능합니다</p>
        <Input type="file" accept=".csv" />

        <Heading as="h4">ipynb 파일 제출</Heading>
        <p>하나의 ipynb 파일만 업로드 가능합니다</p>
        <Input type="file" accept=".ipynb" />

        <Button className="inline-block">파일 제출</Button>
      </form>

      <Heading as="h4">제출 내역</Heading>
      <p>선택한 제출 내역이 리더보드에 표시됩니다.</p>
      <Table column={column} data={data} />
    </>
  );
}
