import { Heading } from '@/components';
import { PAGE } from '@/constants';
import { AdminCreateEditForm } from '../components';
import { useCreateAnnouncementMutation } from './hooks/query';

export function AdminNewAnnouncement() {
  const { mutate: createAnnouncement } = useCreateAnnouncementMutation();

  const onAnnouncementMutate = (data: CreateEditAnnouncementRequest) => {
    createAnnouncement(data);
  };

  return (
    <div className="container">
      <Heading as="h3" className="pageTitle">
        {PAGE.NEW_ANNOUNCEMENT}
      </Heading>
      <AdminCreateEditForm mode="announcement" onAnnouncementMutate={onAnnouncementMutate} />
    </div>
  );
}
