import { Heading } from '@/components';
import { PAGE } from '@/constants';
import { useParams } from 'react-router-dom';
import { AdminCreateEditForm } from './components';
import { useAdminAnnouncementQuery, useEditAnnouncementMutation } from './hooks/query';

export function AdminEditAnnouncement() {
  const { id: announcementId } = useParams() as { id: string };
  const { mutate: editAnnouncement } = useEditAnnouncementMutation();

  const onMutate = (data: CreateEditAnnouncementRequest) => {
    editAnnouncement({ announcementId, payload: data });
  };

  const { data: data } = useAdminAnnouncementQuery(announcementId);

  return (
    <div className="container">
      <Heading as="h3" className="pageTitle">
        {PAGE.EDIT_ANNOUNCEMENT}
      </Heading>
      <AdminCreateEditForm mode="announcement" data={data} onMutate={onMutate} />
    </div>
  );
}
