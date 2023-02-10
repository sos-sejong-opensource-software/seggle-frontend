import { Article } from '../../components/template/Article';

export function BoardDetail() {
  const dummyData = {
    id: 3,
    title: '건의합니다222',
    context: 'ㅁㄴㅁㅇ',
    created_user: '123123',
    created_time: '2023-01-18T23:44:25.571726',
  };

  return (
    <>
      <Article detail={dummyData}></Article>
    </>
  );
}
