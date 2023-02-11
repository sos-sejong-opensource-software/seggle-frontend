import { Heading } from '@/components';
import { PAGE } from '@/constants';
import { AdminCreateEditForm } from '../components';
import { useCreateFaqMutation } from './hooks/query';

export function AdminNewFaq() {
  const { mutate: createFaq } = useCreateFaqMutation();

  const onFaqMutate = (data: CreateEditFaqRequest) => {
    createFaq(data);
  };

  return (
    <div className="container">
      <Heading as="h3" className="pageTitle">
        {PAGE.NEW_FAQ}
      </Heading>
      <AdminCreateEditForm mode="faq" onFaqMutate={onFaqMutate} />
    </div>
  );
}
