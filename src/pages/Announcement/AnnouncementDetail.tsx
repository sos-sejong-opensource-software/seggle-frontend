import { useNavigate, useParams } from 'react-router-dom';

import { Article } from '../../components/Article';
import { Button } from '@/components';
import { useAnnouncementDetailQuery } from './hooks/query';

export function AnnouncementDetail() {
  const announcementId = String(useParams().id);
  const { data } = useAnnouncementDetailQuery(announcementId);

  const goAnnouncementList = () => {
    history.back();
  };

  return (
    <>
      <Button onClick={goAnnouncementList}>목록</Button>
      <Article detail={data}></Article>
    </>
  );
}
